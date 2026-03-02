const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-display font-bold text-gradient-gold mb-2">Planeta Lov</h3>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Planeta Lov. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
