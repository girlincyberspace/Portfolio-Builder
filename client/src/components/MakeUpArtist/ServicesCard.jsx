
function ServicesCard(props) {
  return (
    <div>
      <div className="bg-white w-72">
        <img src={props.url} alt="services image" className="p-2" />
        <p className="text-[20px] px-6 py-3 text-center">{props.service}</p>
        <p className="text-center p-10">I'm a paragraph. Click here to add your own text and edit me.</p>
      </div>
    </div>
  )
}

export default ServicesCard
