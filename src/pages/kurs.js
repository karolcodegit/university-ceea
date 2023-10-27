import React from 'react'
import Title from '../components/Title/Title'
import Paragraph from '../components/Paragraph/Paragraph'
import Line from '../components/Line/Line'
import List from '../components/List/List'
import Seo from "../components/seo"
import { ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const Course = () => {
  return (
    <div className='px-5 py-36 max-w-6xl mx-auto flex max-lg:flex-col justify-between'>
      <div className='order-2 col-span-4 pt-8'>
          <div className='rounded-md flex flex-col'>
                <div className='p-5 flex items-center'>
                    <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
                    <span className='font-light text-sm pl-4'>Cena kursu: </span><span className='font-bold pl-4 text-3xl'>1400 zł</span>
                </div>
                <div className='border-t p-5 flex items-center'>
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />
                    <span className='font-light text-sm pl-4'>Czas trwania kursu: 30h</span>
                </div>
                <div className='p-5'>
                    <span className='font-bold text-darker text-3xl'>Zapisy dostępne</span>
                </div>
            </div>
      </div>
      <div className='order-1 max-w-2xl'>
        <section className='border-b'>
          <div>
            <Title tag='h3'>Medycyna okołooperacyjna</Title>
            <Line/>
          </div>
          <div>
            <Paragraph>Kurs realizowany w formie stacjonarnej.</Paragraph>
            <Paragraph>Warsztaty z monitorowania hemodynamicznego u chorych poddawanych zabiegom w obrębie jamy brzusznej.</Paragraph>
            <Paragraph>Podczas II części programu Krakowskim targiem omówione zostaną niejednorodne aspekty manipulacji w negocjacjach, co oznacza, że uwaga Słuchaczy zostanie zwrócona na przewrotność zagrań (jak podwójny blef) czy perfidii (pozorna strata) tak, aby uświadomić im ryzyko polegające na manipulacji, która jest perfidnie zamaskowana.</Paragraph>
            <Paragraph>Kurs prezentuje rozszerzony materiał z zakresu obrony przed manipulacją i technikami wpływu społecznego w trakcie aktów i sytuacji negocjacyjnych. Przez analizę niejednorodnych i rzadko opisywanych w kontekście negocjowania sposobów wpływu społecznego, jak np. ciemna triada, przymusowa perswazja, trik zaufania, ogłupianie czy izolacja, Słuchacze przyswoją rozszerzony materiał z zakresu wpływu społecznego, a dzięki realizacji części warsztatowej (symulacje, interakcje itp.) udoskonalą swój system przeciwdziałania manipulacji w negocjacyjnych sytuacjach.</Paragraph>
          </div>
        </section>

        <section className='pt-20'>
          <div className='py-8'>
            <Title tag='h4'>Program ramowy kursu</Title>
            <Line/>
          </div>
          <div className='ml-5'>
            <ol className='list-decimal'>
              <List>Znieczulenie pacjentów po transplantacji narządów do innych zabiegów</List>
              <List>TIVA- całkowite znieczulenie dożylne</List>
              <List>Znieczulenie w chirurgii jednego dnia</List>
              <List>Znieczulenie w chirurgii robotycznej</List>
              <List>Hipotermia okołooperacyjna</List>
              <List>Gospodarka preparatami krwi w okresie okołooperacyjnym</List>
              <List>Chory onkologiczny na sali operacyjnej</List>
              <List>Znieczulenie u chorych uzależnionych od leków, opioidów i alkoholu</List>
              <List>Znieczulenie pacjenta do przeszczepu nerek, trzustki i wątroby</List>
              <List>Monitorowanie hemodynamiczne u chorych do zabiegów brzusznych</List>
              <List>Rola znieczulenia zewnątrzoponowego i blokad ściany jamy brzusznej w chirurgii jamy brzusznej</List>
              <List>Delirium okołooperacyjne – monitorowanie, zapobieganie, leczenie</List>
              <List>Trudne drogi oddechowe – algorytmy, zalecenia</List>
              <List>Poradnia anestezjologiczna – zadania i organizacja</List>
              <List>Znieczulenie w torakochirurgii</List>
              <List>Znieczulenie u chorych otyłych i w bariatrii</List>
              <List>Znieczulenie chorych w wieku podeszłym</List>
            </ol>
          </div>
        </section>
      </div>

    </div>
  )
}

export const Head = () => <Seo title="Kurs" />

export default Course