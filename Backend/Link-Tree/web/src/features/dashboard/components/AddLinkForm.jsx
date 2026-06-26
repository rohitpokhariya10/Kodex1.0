import { useForm } from "react-hook-form";
import useDashboard from "../hooks/useDashboard";

const AddLinkForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      title: "",
      url: "",
    },
  });
  const {handleCreateLink} = useDashboard();
  const onSubmit = async (data) => {
    console.log("Link Data:", data);

    // Next Step
    await handleCreateLink(data);

    reset();
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Add New Link
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-4 items-start"
        noValidate
      >
        {/* Title */}

        <div className="col-span-3">
          <label className="block mb-2 text-sm text-gray-300">
            Link Title
          </label>

          <input
            type="text"
            placeholder="Github"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
            className={`w-full rounded-lg bg-gray-800 px-4 py-3 text-white border outline-none transition ${
              errors.title
                ? "border-red-500"
                : "border-gray-700 focus:border-blue-500"
            }`}
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* URL */}

        <div className="col-span-7">
          <label className="block mb-2 text-sm text-gray-300">
            URL
          </label>

          <input
            type="url"
            placeholder="https://github.com/username"
            {...register("url", {
              required: "URL is required",
              pattern: {
                value: /^https?:\/\/.+$/,
                message: "Enter a valid URL",
              },
            })}
            className={`w-full rounded-lg bg-gray-800 px-4 py-3 text-white border outline-none transition ${
              errors.url
                ? "border-red-500"
                : "border-gray-700 focus:border-blue-500"
            }`}
          />

          {errors.url && (
            <p className="mt-1 text-sm text-red-500">
              {errors.url.message}
            </p>
          )}
        </div>

        {/* Button */}

        <div className="col-span-2 pt-8">
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Adding..." : "Add Link"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLinkForm;