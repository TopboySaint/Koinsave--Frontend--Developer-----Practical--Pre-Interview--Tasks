import { Link } from "react-router-dom";

export default function FourOFour() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-6">
			<section className="w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl p-10 border border-green-100 text-center">
				<div className="text-6xl mb-3">🔍</div>
				<h1
					className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide drop-shadow-lg"
					style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
				>
					404 — Page not found
				</h1>
				<p className="mt-3 text-gray-700">
					The page you’re looking for doesn’t exist or may have been moved.
				</p>
				<div className="mt-6 flex items-center justify-center gap-3">
					<Link
						to="/"
						className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-5 py-3 font-semibold text-white shadow-md hover:from-green-700 hover:to-green-800 transition"
					>
						Go to Home
					</Link>
					<Link
						to="/signin"
						className="inline-flex items-center justify-center rounded-lg border border-green-300 px-5 py-3 font-semibold text-green-800 bg-white hover:bg-green-50 transition"
					>
						Sign in
					</Link>
				</div>
				<p className="mt-6 text-xs text-gray-500">
					If you typed the address, check for typos.
				</p>
			</section>
		</main>
	);
}

