import "./globals.css";

export default function PageLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className="bg-white-800">
<div className="h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
<header className="bg-gray-800 shadow tx-white">
<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
<h1 className="text-3xl tracking-tight text-black-900">
Dashboard
</h1>
</div>
</header>
<main className="flex min-h-screen w-full flex-col items-center justify-center text-black">
{children}
</main>
</div>
</body>
</html>
);
}