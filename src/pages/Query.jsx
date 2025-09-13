const Query = () => {

  const optionButton = (setter, value, label) => {
    return <button onClick={() => { setter(value) }}
      className="flex flex-center w-full text-left px-4 py-3 bg-white rounded-lg border-4 border-secondary shadow-md hover:shadow-lg transition-shadow">
      {label}
    </button>
  }

  return <div className="w-screen min-h-screen bg-lightblue flex flex-col items-center px-4">

   

    <div className="mt-10 flex flex-col gap-4 w-full">
      <span className="font-semibold text-secondary" >
        I am between the ages of
      </span>
      <div className="grid grid-cols-2 gap-4 w-full">
        {optionButton(() => { }, "0-12", "0-12")}
        {optionButton(() => { }, "13-19", "13-19")}
        {optionButton(() => { }, "20-35", "20-35")}
        {optionButton(() => { }, "36-50", "36-50")}
        {optionButton(() => { }, "51-65", "51-65")}
        {optionButton(() => { }, "66+", "66+")}
      </div>
    </div>
  </div >
}

export default Query;