const Output = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded shadow">
          <div className="bg-indigo-500">
            <h3 className="p-6 text-xl font-bold text-white">
              Sales Monitoring
            </h3>
            <div className="chart" data-type="area" data-variant="dark-bg" />
          </div>
          <div className="-m-3 flex flex-wrap bg-white px-6 py-10">
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">Sales per user</p>
                <h3 className="text-3xl font-bold">$1035</h3>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">Inventory</p>
                <h3 className="text-3xl font-bold">$435,122</h3>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">Value of refunds</p>
                <h3 className="text-3xl font-bold">$53,525</h3>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">Revenue</p>
                <h3 className="text-3xl font-bold">$2,090,00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Output;
