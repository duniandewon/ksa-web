interface Props {
  children: React.ReactNode;
  backgroundImage?: string;
}

export function Hero({ backgroundImage, children }: Props) {
  return (
    <section className="relative w-screen bg-accent-foreground text-white min-h-[70vh] flex items-center justify-center">
      {backgroundImage ? (
        <div className="absolute top-0 left-0 inset-0 overflow-hidden">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full" />
          </div>
        </div>
      ) : null}

      <div className="relative z-10 w-full pt-80 pb-16 flex items-center justify-center">
        {children}
      </div>
    </section>
  );
}
