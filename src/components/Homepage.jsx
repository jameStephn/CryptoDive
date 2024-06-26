import { Col, Row, Statistic, Typography } from "antd"
import { useGetCryptosQuery } from "../services/coinsApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
const { Title  } = Typography;
import "../App.css"

const Homepage = () => {
  const { data, isFetching , isError } = useGetCryptosQuery(10); 
  const globalStats = data?.data?.stats;
  if(isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div className="homepage-container" style={{padding:10}}>
      <Title level={1} className="heading">
Global Data Statistics
      </Title>
      <Row >
        <Col span={10} className="cards"  >
          <Statistic title="Total Cryptocurrencies" className="title" value={globalStats.total} /> 
        </Col>
        <Col span={10} className="cards">
          <Statistic title="Total Coins" className="title" value={globalStats.totalCoins} /> 
        </Col>
        <Col span={10} className="cards">
          <Statistic title="Total Exchanges" className="title" value={millify(globalStats.totalExchanges,{space: true})} /> 
        </Col>
        <Col span={10} className="cards">
          <Statistic title="Total Markets" className="title" value={millify(globalStats.totalMarkets, {space: true})} />
         
        </Col>
        <Col span={10} className="cards">
          
          <Statistic title="Total MarketCap " className="title" value={millify(globalStats.totalMarketCap ,{space: true})} /> 
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
        <Link to="/cryptocurrencies">Show more</Link>
      
        </Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
        <Link to="/news">Show more</Link>
      
        </Title>
      </div>
      <News simplified/>
    </div>
  )
}
export default Homepage