import type { GetServerSidePropsContext, NextPage } from 'next'
import { services } from '../data'
import { ServiceCard } from '../components'

const Index: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6>What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(service => (
            <div key={service.title} className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
              <ServiceCard service={service} />
            </div>
      
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index

// export const getServerSideProps = async (context: GetServerSidePropsContext)=> {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
