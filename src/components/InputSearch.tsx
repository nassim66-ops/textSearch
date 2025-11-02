const InputSearch = ({ search, setSearch }: { search: string, setSearch: (value: string) => void }) => {
  return (
    <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  )
}

export default InputSearch
