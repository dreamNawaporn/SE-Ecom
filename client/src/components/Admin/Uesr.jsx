import { useQuery } from "@tanstack/react-query";






const User = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: user = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    });
    const handleMakeAdmin = (user) => {
        if (user.role === "admin") {
            axiosSecure.patch(``)
        }
    }


    return (
        <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h3 className="font-bold text-lg mt-3">Update Your ProFile</h3>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload ProFile Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                  {...register("photoURL")}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Update"
                  className="btn bg-red-700 text-white"
                />
              </div>
            </form>
          </div>
        </div>
      );
    };
