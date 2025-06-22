export default function SearchBar() {
  return (
    <form
      className="relative w-full max-w-xl"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Under Construction!"
        className="w-full border rounded-full px-4 py-1 pr-12 focus:outline-none focus:ring"
      />
      <button
        type="submit"
        className="font-semibold absolute right-1 top-1/2 transform -translate-y-1/2 bg-lime hover:bg-lightLime text-darkGray rounded-full px-3 py-.8 "
      >
        Search
      </button>
    </form>
  );
}
