import { Client } from "@notionhq/client"
import axios from "axios"
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const Home = () => {
  
  const test = async () => {
    const abc = await axios.get(
      'https://api.notion.com/v1/databases',
      {
        headers: {
          Authorization: "Bearer 'secret_svJhfh5ig1MGULUjTX2WwB0e8aj8BiBqHb4S5C4AeIZ'",
          'Notion-Version': '2021-05-13',
          'Access-Control-Allow-Origin': '*'
        }
      }  
    )

    console.log(abc)
  }

  return (
    <div>
      <button onClick={test}>Test Test</button>
    </div>
  )
}

export async function getStaticProps() {
  const abc = await axios.post(
    'https://api.notion.com/v1/databases/477162dc40554fb19c84ac5f46a97f14/query',
    {

    },
    {
      headers: {
        Authorization: "Bearer secret_svJhfh5ig1MGULUjTX2WwB0e8aj8BiBqHb4S5C4AeIZ",
        'Notion-Version': '2021-05-13',
        'Access-Control-Allow-Origin': '*'
      }
    }  
  )

  console.log(abc.data.results[1].properties.Name.title[0].annotations)

  return { props: {} }
}

export default Home
