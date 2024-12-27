export default function Achievement() {
  return (
    <div className="bg-gradient-achievement relative z-20">
      <div className="container grid grid-cols-4">
        <div className="space-y-3 bg-muted text-muted-foreground rounded-l-3xl px-10 py-8">
          <h2 className="text-6xl font-bold">97%</h2>
          <h2 className="font-semibold text-2xl">Customer Statisification</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididu ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        <div className="bg-primary text-white px-10 py-8 rounded-l-3xl">
            <h2 className="text-6xl font-bold">300K</h2>
            <p className="text-2xl">Umroh Pligrims</p>
        </div>

        <div className="bg-primary text-white px-10 py-8 border-l">
            <h2 className="text-6xl font-bold">250K</h2>
            <p className="text-2xl">Haj Pligrims</p>
        </div>

        <div className="bg-primary text-white px-10 py-8 border-l">
            <h2 className="text-6xl font-bold">15+</h2>
            <p className="text-2xl">Awards</p>
        </div>
      </div>
    </div>
  );
}
