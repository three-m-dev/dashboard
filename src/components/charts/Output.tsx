const Output = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded shadow">
          <div className="bg-indigo-500">
            <h3 className="p-6 text-xl font-bold text-white">Output</h3>
            <div className="chart" data-type="area" data-variant="dark-bg" />
          </div>
          <div className="-m-3 flex flex-wrap bg-white px-6 py-10">
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">
                  This week's expected output
                </p>
                <h3 className="text-3xl font-bold">$245,000</h3>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">
                  This week's actual output
                </p>
                <h3 className="text-3xl font-bold">$190,00</h3>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">
                  Last week's expected output
                </p>
                <h3 className="text-3xl font-bold">$220,000</h3>
              </div>
            </div>
            <div className="w-1/2 p-3">
              <div className="rounded border px-6 py-4">
                <p className="text-xs text-gray-500">
                  Last week's actual output
                </p>
                <h3 className="text-3xl font-bold">$205,000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Output;
