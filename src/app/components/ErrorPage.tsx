import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow p-8 text-center">
        <h1 className="text-2xl font-semibold mb-2">Terjadi Kesalahan</h1>
        <p className="text-sm text-gray-600 mb-4">
          Maaf, sesuatu tidak beres. Coba kembali atau hubungi administrator.
        </p>

        <div className="text-left mb-4">
          <pre className="text-xs text-red-600 whitespace-pre-wrap">{String(error?.status ? `${error.status} ${error.statusText || ''}` : '')}{error?.message ? `\n${error.message}` : ''}</pre>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="px-4 py-2 bg-green-600 text-white rounded-md">
            Kembali ke Dashboard
          </Link>
          <Link to="/landing" className="px-4 py-2 border rounded-md text-gray-700">
            Buka Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}
