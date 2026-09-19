
export default function Page() {
  return (
    <div className="p-6">

      <div className="mb-8">
        <h1 className="mb-4 text-xl font-semibold">Statistics</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <p className="text-sm text-white">Products</p>
            <p className="mt-2  font-bold text-white">120</p>
            <p className="mt-2 text-sm text-white">
              +12% from last month
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <p className="text-sm text-white">Orders</p>
            <p className="mt-2  font-bold text-white">45</p>
            <p className="mt-2 text-sm text-white">
              +8% from last month
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <p className="text-sm text-white">Users</p>
            <p className="mt-2  font-bold text-white">85</p>
            <p className="mt-2 text-sm text-white">
              +15% from last month
            </p>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <p className="text-sm text-white">Revenue</p>
            <p className="mt-2  font-bold text-white">$2,450</p>
            <p className="mt-2 text-sm text-white">
              +10% from last month
            </p>
          </div>
        </div>
      </div>


      <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="mb-6">
          <h2 className="text-xl font-semibold ">Sales Overview</h2>
          <p className="text-sm text-gray-500">
            Sales performance for the last 6 months
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 bg-blue-100">

          <div className="rounded-xl border bg-white p-6 shadow-sm ">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold  ">Recent Orders</h2>
              <button className="text-sm text-blue-600 hover:underline">
                View all
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">#1001</p>
                  <p className="text-sm text-gray-500">Gvidon</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$120</p>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">#1002</p>
                  <p className="text-sm text-gray-500">Anna Ohanyan</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$85</p>
                  <span className="text-sm text-yellow-600">Pending</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">#1003</p>
                  <p className="text-sm text-gray-500">Patrisia</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$210</p>
                  <span className="text-sm text-green-600">Completed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">Top Products</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Home decor</p>
                  <p className="text-sm text-gray-500">Furniture</p>
                </div>
                <p className="font-semibold">1000</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Ceramic Vase</p>
                  <p className="text-sm text-gray-500">Ceramics</p>
                </div>
                <p className="font-semibold">18 sold</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Holiday</p>
                  <p className="text-sm text-gray-500">Furniture</p>
                </div>
                <p className="font-semibold">14 sold</p>
              </div>
            </div>
          </div>


          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">Order Status</h2>

            <div className="space-y-4">
              <div>
                <div className="mb-2 flex justify-between">
                  <span>Completed</span>
                  <span>65%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[65%] rounded-full bg-green-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Pending</span>
                  <span>20%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[20%] rounded-full bg-yellow-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Cancelled</span>
                  <span>15%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[15%] rounded-full bg-red-500" />
                </div>
              </div>
            </div>
          </div>


          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Home Decor</h2>
              <span className="text-sm text-red-600">Needs attention</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span>Holiday </span>
                <span className="font-semibold text-red-600">3 left</span>
              </div>

              <div className="flex items-center justify-between border-b pb-3">
                <span>Ceramic Vase</span>
                <span className="font-semibold text-red-600">2 left</span>
              </div>

              <div className="flex items-center justify-between">
                <span> </span>
                <span className="font-semibold text-red-600">1 left</span>
              </div>
            </div>
          </div>
        </div>


        <div className="flex h-64 items-end gap-6 border-b border-l p-4 ">
          <div className="flex h-[40%] w-full items-end justify-center rounded-t bg-blue-500">
            <span className="mb-2 text-sm text-white">Jan</span>
          </div>

          <div className="flex h-[55%] w-full items-end justify-center rounded-t bg-blue-500">
            <span className="mb-2 text-sm text-white">Feb</span>
          </div>

          <div className="flex h-[70%] w-full items-end justify-center rounded-t bg-blue-500">
            <span className="mb-2 text-sm text-white">Mar</span>
          </div>

          <div className="flex h-[50%] w-full items-end justify-center rounded-t bg-blue-500">
            <span className="mb-2 text-sm text-white">Apr</span>
          </div>

          <div className="flex h-[80%] w-full items-end justify-center rounded-t bg-blue-500">
            <span className="mb-2 text-sm text-white">May</span>
          </div>

          <div className="flex h-[65%] w-full items-end justify-center rounded-t bg-blue-500">
            <span className="mb-2 text-sm text-white">Jun</span>
          </div>
        </div>
      </div>
    </div>
  );
}



