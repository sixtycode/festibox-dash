import Image from "next/image";
import Link from "next/link";

export default function Dash() {
  return (
    <div className="bg-gray-50 flex h-screen">
      <div className="w-64 bg-white md:block z-20 hidden flex-shrink-0 overflow-y-auto">
        <div className="py-4 text-gray-500">
          <Link className="ml-6 text-lg font-bold text-gray-800" href="/dash">
            Festivool
          </Link>
          <ul className="mt-6">
            <li className="px-6 py-3 relative">
              <span
                className="inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg absolute"
                aria-hidden="true"
              ></span>
              <Link
                className="text-sm font-semibold text-gray-800 hover:text-gray-800 inline-flex w-full items-center transition-colors duration-150"
                href="/dash"
              >
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="px-6 py-3 relative">
              <Link
                className="text-sm font-semibold hover:text-gray-800 inline-flex w-full items-center transition-colors duration-150"
                href=""
              >
                <span className="ml-4">Frames</span>
              </Link>
            </li>
            <li className="px-6 py-3 relative">
              <Link
                className="text-sm font-semibold hover:text-gray-800 inline-flex w-full items-center transition-colors duration-150"
                href="cards.html"
              >
                <span className="ml-4">Booths</span>
              </Link>
            </li>
            <li className="px-6 py-3 relative">
              <Link
                className="text-sm font-semibold hover:text-gray-800 inline-flex w-full items-center transition-colors duration-150"
                href="buttons.html"
              >
                <span className="ml-4">Photo Filter</span>
              </Link>
            </li>
            <li className="px-6 py-3 relative">
              <Link
                className="text-sm font-semibold hover:text-gray-800 inline-flex w-full items-center transition-colors duration-150"
                href="modals.html"
              >
                <span className="ml-4">Vouchers</span>
              </Link>
            </li>
            <li className="px-6 py-3 relative">
              <Link
                className="text-sm font-semibold hover:text-gray-800 inline-flex w-full items-center transition-colors duration-150"
                href="tables.html"
              >
                <span className="ml-4">Transactions</span>
              </Link>
            </li>
            <li className="px-6 py-3 relative">
              <button
                className="text-sm font-semibold hover:text-gray-800 inline-flex w-full items-center justify-between transition-colors duration-150"
                aria-haspopup="true"
              >
                <span className="inline-flex items-center">
                  <span className="ml-4">Soft Files</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col">
        <header className="py-4 bg-white shadow-md dark:bg-gray-800 z-10">
          <div className="px-6 text-purple-600 dark:text-purple-300 container mx-auto flex h-full items-center justify-between">
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:shadow-outline-purple focus:outline-none"
              aria-label="Menu"
            ></button>
            <div className="lg:mr-32 flex flex-1 justify-center">
              <div className="max-w-xl mr-6 focus-within:text-purple-500 relative w-full"></div>
            </div>
            <ul className="space-x-6 flex flex-shrink-0 items-center">
              <li className="flex">
                <button
                  className="rounded-md focus:shadow-outline-purple focus:outline-none"
                  aria-label="Toggle color mode"
                ></button>
              </li>
              <li className="relative">
                <button
                  className="rounded-md focus:shadow-outline-purple relative align-middle focus:outline-none"
                  aria-label="Notifications"
                  aria-haspopup="true"
                >
                  <span
                    aria-hidden="true"
                    className="top-0 right-0 w-3 h-3 translate-x-1 -translate-y-1 bg-red-600 border-white dark:border-gray-800 absolute inline-block transform rounded-full border-2"
                  ></span>
                </button>
              </li>
              <li className="relative">
                <button
                  className="focus:shadow-outline-purple rounded-full align-middle focus:outline-none"
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </div>
        </header>
        <main className="h-full overflow-y-auto">
          <div className="px-6 container mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Welcome Festivool
            </h2>
            <div className="gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 grid">
              <div className="p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 flex items-center">
                <div className="p-3 mr-4 text-orange-500 bg-orange-100 dark:text-orange-100 dark:bg-orange-500 rounded-full"></div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total clients
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    6389
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 flex items-center">
                <div className="p-3 mr-4 text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500 rounded-full"></div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Account balance
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    $ 46,760.89
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 flex items-center">
                <div className="p-3 mr-4 text-blue-500 bg-blue-100 dark:text-blue-100 dark:bg-blue-500 rounded-full"></div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    New sales
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    376
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 flex items-center">
                <div className="p-3 mr-4 text-teal-500 bg-teal-100 dark:text-teal-100 dark:bg-teal-500 rounded-full"></div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Pending contacts
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    35
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-xs w-full overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="whitespace-no-wrap w-full">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-gray-500 dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 border-b text-left uppercase">
                      <th className="px-4 py-3">Client</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:divide-gray-700 dark:bg-gray-800 divide-y">
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              10x Developer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 rounded-full">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Jolina Angelie</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Unemployed
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 369.95</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600 rounded-full">
                          Pending
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Sarah Curry</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Designer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 86.00</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700 rounded-full">
                          Denied
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Rulia Joberts</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Actress
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 1276.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 rounded-full">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Wenzel Dashington</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Actor
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700 rounded-full">
                          Expired
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Dave Li</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Influencer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 rounded-full">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Maria Ramovic</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Runner
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 rounded-full">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Hitney Wouston</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Singer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 rounded-full">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>

                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="text-sm flex items-center">
                          <div className="w-8 h-8 mr-3 md:block relative hidden rounded-full">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="inset-0 shadow-inner absolute rounded-full"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              10x Developer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$ 863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 rounded-full">
                          Approved
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800 grid border-t uppercase">
                <span className="col-span-3 flex items-center">
                  Showing 21-30 of 100
                </span>
                <span className="col-span-2"></span>
                <span className="mt-2 sm:mt-auto sm:justify-end col-span-4 flex">
                  <nav aria-label="Table navigation">
                    <ul className="inline-flex items-center">
                      <li>
                        <button
                          className="px-3 py-1 rounded-md rounded-l-lg focus:shadow-outline-purple focus:outline-none"
                          aria-label="Previous"
                        ></button>
                      </li>
                      <li>
                        <button className="px-3 py-1 rounded-md focus:shadow-outline-purple focus:outline-none">
                          1
                        </button>
                      </li>
                      <li>
                        <button className="px-3 py-1 rounded-md focus:shadow-outline-purple focus:outline-none">
                          2
                        </button>
                      </li>
                      <li>
                        <button className="px-3 py-1 text-white bg-purple-600 border-purple-600 rounded-md focus:shadow-outline-purple border border-r-0 transition-colors duration-150 focus:outline-none">
                          3
                        </button>
                      </li>
                      <li>
                        <button className="px-3 py-1 rounded-md focus:shadow-outline-purple focus:outline-none">
                          4
                        </button>
                      </li>
                      <li>
                        <span className="px-3 py-1">...</span>
                      </li>
                      <li>
                        <button className="px-3 py-1 rounded-md focus:shadow-outline-purple focus:outline-none">
                          8
                        </button>
                      </li>
                      <li>
                        <button className="px-3 py-1 rounded-md focus:shadow-outline-purple focus:outline-none">
                          9
                        </button>
                      </li>
                      <li>
                        <button
                          className="px-3 py-1 rounded-md rounded-r-lg focus:shadow-outline-purple focus:outline-none"
                          aria-label="Next"
                        ></button>
                      </li>
                    </ul>
                  </nav>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
