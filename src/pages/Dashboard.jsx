import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from '../api/axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [showSendMoney, setShowSendMoney] = useState(false);
  const [sendAccount, setSendAccount] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [sendSuccess, setSendSuccess] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [loadingNotifications, setLoadingNotifications] = useState(true);

  const navigate = useNavigate();

  const formatBalance = (balance) => {
    return balance?.toLocaleString() || "0";
  };

  useEffect(() => {
    const token = localStorage.getItem("webVault");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const [firstName, lastName] = (decoded.name || '').split(' ');
        setUser({
          firstName: firstName || 'User',
          lastName: lastName || '',
            accountNumber: decoded.accountNumber,
            email: decoded.email
        });
        setLoadingNotifications(true);
      } catch (error) {
        console.error("Invalid token:", error);
        navigate("/signin");
      }
    }
  }, [navigate]);

  useEffect(() => {
    if (user?.accountNumber) {
      fetchLatestUser(user.accountNumber);
    }
  }, [user?.accountNumber]);

  const fetchLatestUser = async (accountNumber) => {
    setLoadingNotifications(true);
  try {
    const res = await api.get(`/user/${accountNumber}`);
    setUser(res.data);
  } catch (err) {
    console.log(err);
    setSendError("Failed to refresh user data. Please try again.");  
    setNotifications([]);
  }finally{
    setLoadingNotifications(false)
  }
};

  const sendMoney = async (e) => {
    e.preventDefault();
    setSendError("");
    setSendSuccess("");
    if (!sendAccount || !sendAmount) {
      setSendError("Please fill in all fields.");
      return;
    }
    if (isNaN(sendAmount) || Number(sendAmount) <= 0) {
      setSendError("Enter a valid amount.");
      return;
    }
    if (!user || !user.accountNumber) {
      setSendError("User account not loaded.");
      return;
    }
    setSending(true);
    try {
      const res = await api.post('/transfer', {
        senderAccountNumber: user.accountNumber,
        recipientAccountNumber: sendAccount,
        amount: sendAmount,
      });
      setSendSuccess(res.data.message || "Transfer successful!");
      await fetchLatestUser(user.accountNumber)
      setSendAccount("");
      setSendAmount("");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setSendError(err.response.data.message);
      } else {
        setSendError("Network error. Please try again.");
      }
    } 
  };

  useEffect(() => {
    if (user && user.accountNumber) {
      api
        .get(`/notifications/${user.accountNumber}`)
        .then((res) => setNotifications(Array.isArray(res.data) ? res.data : []))
        .catch(() => setNotifications([]));
    }
  }, [user]);

  const logout = () => {
    const confirmation = confirm("Are you sure you want to logout?");
    if (confirmation) {
      localStorage.removeItem("webVault");
      navigate("/signin");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-green-50 flex flex-col">
      <header className="bg-white shadow-lg py-6 px-8 flex items-center justify-between border-b-2 border-green-500">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center cursor-pointer" onClick={()=>{navigate('/')}}>
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide cursor-pointer" onClick={()=>{navigate('/')}}>
            KoinSave
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto py-10 px-4">
  <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12 mt-8">
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center border-t-4 border-green-600 min-h-[260px] w-full max-w-md justify-center mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Hello, {user ? `${user.firstName} ${user.lastName}` : "User"}
            </h2>
            <p className="text-gray-600 mb-4">
              Account Number:{" "}
              <span className="font-semibold text-gray-800">
                {user ? user.accountNumber || "Loading..." : "Loading..."}
              </span>
            </p>

            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 p-6 rounded-xl shadow-md">
              <span className="block text-2xl font-bold text-green-700">
                {" "}
                ₦{user ? formatBalance(user.balance) : "Loading..."}
              </span>
              <span className="text-sm text-gray-600 font-medium mt-1">Available Balance</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-2xl shadow-xl p-10 flex flex-col items-center border-t-4 border-green-600 min-h-[260px] w-full max-w-md justify-center mx-auto">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="flex flex-col gap-4 w-full">
              <button
                className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
                onClick={() => setShowSendMoney(true)}
              >
                Send Money
              </button>

              {showSendMoney && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-t-4 border-green-600 relative animate-fadeIn">
                    <button
                      className="absolute top-3 right-3 text-gray-400 hover:text-green-700 text-2xl font-bold focus:outline-none transition-colors"
                      onClick={() => {
                        setShowSendMoney(false);
                        setSendAccount("");
                        setSendAmount("");
                        setSendError("");
                        setSendSuccess("");
                      }}
                      aria-label="Close"
                    >
                      &times;
                    </button>

                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                      Send Money
                    </h3>

                    <form onSubmit={sendMoney} className="flex flex-col gap-4">

                      <label className="text-sm font-semibold text-gray-700">
                        Account Number
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 transition-all"
                        placeholder="Enter account number"
                        value={sendAccount}
                        onChange={(e) => setSendAccount(e.target.value)}
                        maxLength={12}
                        required
                      />
                      <label className="text-sm font-semibold text-gray-700">
                        Amount (₦)
                      </label>
                      <input
                        type="number"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 transition-all"
                        placeholder="Enter amount"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(e.target.value)}
                        min={1}
                        required
                      />
                      {sendError && (
                        <div className="text-red-600 text-sm text-center">
                          {sendError}
                        </div>
                      )}
                      {sendSuccess && (
                        <div className="text-green-600 text-sm text-center">
                          {sendSuccess}
                        </div>
                      )}
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg mt-2 disabled:opacity-60 transform hover:scale-[1.02]"
                        disabled={sending}
                      >
                        {sending ? "Transferring..." : "Transfer"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
              <button
                className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-8 rounded-lg font-bold text-lg shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-800 transition-all mt-4 w-full focus:outline-none focus:ring-4 focus:ring-green-200 transform hover:scale-[1.02]"
                onClick={() => navigate('/investments')}
              >
                Invest
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600 min-h-[340px]">
          <h2 className="text-lg font-bold text-gray-800 mb-6">
            Recent Transactions
          </h2>
          <div className="overflow-y-auto max-h-72 pr-2">
            {loadingNotifications ? (
              <div className="text-center text-gray-500">
                <svg className="animate-spin h-5 w-5 mx-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading notifications...
              </div>
            ) : (
              <ul className="space-y-3">
                {notifications.length === 0 ? (
                  <li className="text-gray-500">No notifications yet.</li>
                ) : (
                  notifications.map((notification, i) => (
                    <li
                      key={i}
                      className={`px-4 py-2 rounded-lg text-sm shadow-sm ${
                        notification.type === "credit"
                          ? "bg-green-50 text-green-700 border-l-4 border-green-500"
                          : notification.type === "debit"
                          ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500"
                          : "bg-gray-50 text-gray-700 border-l-4 border-gray-400"
                      }`}
                    >
                      {notification.message}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white py-6 mt-10 shadow-inner text-center text-gray-600 text-sm border-t border-gray-200">
        &copy; 2025 KoinSave. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
