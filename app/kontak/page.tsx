export default function KontakPage() {
	return (
		<main className="mx-auto max-w-2xl px-4 py-16">
			<h1 className="mb-6 text-3xl font-bold">Kontak</h1>
			<p className="mb-6 text-lg">
				Silakan hubungi saya melalui kontak berikut:
			</p>
			<ul className="space-y-3 text-lg">
				<li>
					<strong>WhatsApp:</strong>{" "}
					<a
						href="https://wa.me/6282261634955"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						082261634955
					</a>
				</li>
				<li>
					<strong>GitHub:</strong>{" "}
					<a
						href="https://github.com/akhiizhar"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						akhiizhar
					</a>
				</li>
			</ul>
		</main>
	);
}
