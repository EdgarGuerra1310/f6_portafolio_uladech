import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Copiloto Pedagógico ULADECH",
  description: "Revisión asistida y trazable de evidencias pedagógicas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="inst-bar">
          <span><strong>ULADECH Católica</strong> · Universidad Católica Los Ángeles de Chimbote</span>
          <span>Diplomado · Campus Virtual</span>
        </div>
        <header className="app-header">
          <Link href="/" className="brand" aria-label="Ir al inicio">
            <span className="brand-mark" aria-hidden="true">U</span>
            <span>
              <strong>Copiloto Pedagógico</strong>
              <small>ULADECH Católica · Chimbote</small>
            </span>
          </Link>
          <nav aria-label="Navegación principal">
            <Link href="/" className="nav-link active">Expedientes</Link>
            <Link href="/analitica" className="nav-link">Analítica</Link>
          </nav>
          <div className="user-pill"><span>DT</span> Docente tutor</div>
        </header>
        <main>{children}</main>
        <footer className="app-footer">
          <span><strong>Universidad Católica Los Ángeles de Chimbote</strong> · Chimbote, Áncash – Perú</span>
          <span>Copiloto Pedagógico · Revisión asistida por IA</span>
        </footer>
      </body>
    </html>
  );
}
