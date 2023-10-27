import * as React from "react"
import Seo from "../components/seo"
import Title from "../components/Title/Title"
import Button from "../components/Button/Button"
import Box from "../components/Box/Box"



const IndexPage = () => (
  <>
  <div className='mx-auto max-w-6xl bg-white flex max-lg:flex-col px-6 py-36 w-full h-full items-center justify-between gap-x-10'>
  <div className='max-w-xl'>
    <Title tag='h1'>Wiodący uniwersytet medyczny oferujący najnowocześniejszą edukację </Title>
    <p className='text-xl py-6'>Odkryj naszą szeroką ofertę kursów, zapoznaj się z naszą obszerną biblioteką książek medycznych i skontaktuj się z nami, aby uzyskać więcej informacji. </p>
    <Button>Zapisz się teraz</Button>
  </div>
  <div className='w-full lg:h-500 max-lg:hidden'>
    <img 
      src="https://res.cloudinary.com/storylens/image/upload/v1697531852/hth4n6yvt1ggdriui1tu.jpg" 
      className='rounded-3xl w-full h-full object-cover' 
      alt=""/>
  </div>
</div>

<div className='w-full bg-medium flex py-10'>
  <div className='mx-auto max-w-7xl flex max-xl:flex-col items-center px-7 max-xl:text-center'>
    <div className='max-w-xl xl:mr-10 max-xl:mb-7'>
      <Title tag='h3' white>Zwiększanie możliwości przyszłych pracowników służby zdrowia</Title>
    </div>
    <div className='flex text-white'>
      <div className='flex items-center pr-4 '>
        <div className='bg-darker p-3 rounded-full'>
          <img className='md:w-10 md:h-10 max-md:w-7 max-md:h-7' src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1688468817/static/component-114svg_1688468705_33030.svg" alt="" />
        </div>
        <span className='md:px-3 max-md:px-2 max-md:text-sm'>Kompleksowe kursy</span>
      </div>
      <div className='flex items-center'>
        <div className='bg-darker p-3 rounded-full'>
          <img className='w-10 h-10 max-md:w-7 max-md:h-7' src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1688468817/static/vector-2svg_1688468705_13779.svg" alt="" />
        </div>
        <span className='md:px-3 max-md:px-2 max-md:text-sm'>Obszerna biblioteka</span>
      </div>
    </div>
  </div>
</div>

<div className='w-full bg-white'>
    <div className='max-auto flex flex-col items-center px-6 py-32 '>
        <div className='text-center'>
          <Title tag='h2'>Wyróżnione cechy naszej Uczelni</Title>
          <p className='text-sm text-gray-200 mt-4'>Jesteśmy dumni z tego, że oferujemy następujące funkcje, które wyróżniają naszą uczelnię na tle innych:</p>
        </div>
        <div className='max-w-6xl py-10 grid lg:grid-cols-3 max-lg:grid-cols-1 max-lg:w-full  gap-x-12 gap-y-8  mt-7'>
          
            <Box 
                image="https://res.cloudinary.com/storylens/image/upload/v1697969908/hwp23nai1yrglzozly1q.jpg"
                title="Środowisko uczenia się oparte na współpracy"
                description="Nasza uczelnia wspiera środowisko uczenia się oparte na współpracy, w którym studenci mogą angażować się w pracę zespołową, rozwiązywanie problemów i krytyczne myślenie. Takie podejście przygotowuje ich do rzeczywistych wyzwań i poprawia ich umiejętności interpersonalne."
                
            />
            <Box 
                image="https://res.cloudinary.com/storylens/image/upload/v1697969908/zinbw3qxj0hystbg38mw.jpg"
                title="Rozwój umiejętności przywódczych"
                description="Wierzymy w wychowywanie przyszłych liderów. Nasza uczelnia oferuje różne programy i zajęcia, które pomagają studentom rozwijać podstawowe umiejętności przywódcze, umożliwiając im wywieranie pozytywnego wpływu w wybranych przez nich dziedzinach."
                
            />
            <Box 
                image="https://res.cloudinary.com/storylens/image/upload/v1697969908/hf562ym5tunge5dd4hx4.jpg"
                title="Nacisk na kreatywność i innowacyjność"
                description="Kreatywność i innowacyjność są wspierane i celebrowane na naszej uczelni. Zapewniamy uczniom możliwość odkrywania ich potencjału twórczego i myślenia nieszablonowego, zwiększając ich umiejętności rozwiązywania problemów."
                
            />

          </div>
      </div>
    </div>
    </>
)











/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */




export const Head = () => <Seo title="Strona główna" />

export default IndexPage
