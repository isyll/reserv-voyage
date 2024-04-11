const content = {
  title: 'Trouvez votre prochain séjour',
  text: 'Obtenez les meilleurs prix sur plus de 10.000 maisons partout au Sénégal',
}

function HeroHeader() {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center w-full flex justify-center">
      <div className="flex flex-col justify-center items-center p-hero">
        <h1 className="font-bold text-white text-3xl pb-2">{content.title}</h1>
        <p className="text-white">{content.text}</p>
      </div>
    </div>
  )
}

export default HeroHeader
