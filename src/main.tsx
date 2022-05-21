import axios from 'axios';

export const Main = () => {
  interface FeedItem {
    id: number;
    title: string;
    points?: number | null;
    user?: string | null;
    time: number;
    time_ago: string;
    comments_count: number;
    type: string;
    url?: string;
    domain?: string;
  }
  const getData = async ():Promise<Array<FeedItem>> => {
    const res = await axios.get('https://api.hnpwa.com/v0/news/1.json')
    console.log(res)
    return res.data
  }
  console.log(getData())
  return (
    <div>
      feeffe
    </div>
  );
}
