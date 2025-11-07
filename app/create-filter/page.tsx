export default function CreateFilter() {
  return (
    <div className="px-6 py-12 lg:px-8 flex min-h-full flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900 text-center">
          Login to Account
        </div>
        <div className="mt-10 text-md font-extralight tracking-tight text-gray-900 text-center">
          Please enter your email and password to continue
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="/dash" method="POST" className="space-y-6">
          <div>
            <label className="text-sm/6 font-medium text-gray-900 block">
              Email address
            </label>
            <div className="mt-2">
              <input
                placeholder="joel@festivool.id"
                id="email"
                type="email"
                name="email"
                required
                className="rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6 block w-full outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm/6 font-medium text-gray-900 block">
                Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                placeholder="*******"
                id="password"
                type="password"
                name="password"
                required
                className="rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm/6 block w-full outline outline-1 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600 flex w-full justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
