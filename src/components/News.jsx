import { Button, Card, Col, Flex, Row, Typography } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";

const { Text, Title } = Typography;

const cardStyle = {
  width: 620, // Ensure the image takes full width,
  margin: "14px",
  maxWidth: 500,
  height: "auto",
  gap: "10px",
};
// const imgStyle = {
//   width: "100%", // Ensure the image takes full width
//   height: "auto", // Maintain aspect ratio
// };
const imgStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "20%",
objectFit: "cover",
  padding: "9px" // Maintain aspect ratio
};

const News = ({ simplified }) => {
  const count =   simplified ? 10 : 25;
  const { data, isFetching} = useGetCryptoNewsQuery(count);
  const result =  data?.news;
  // console.log(result)

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <Row gutter={{xs: 8,
        sm: 16,
        md: 24,
        lg: 32,}} className="crypto-card-container">
        {result && result?.map((item, index) => (
          <Col xs={24} key={index} sm={12} lg={10} className="crypto-card">
          <Card
            hoverable
            style={cardStyle}
           
          >
            <div className="header-news">
              <Flex justify="space-between">
                <Flex vertical>

                <Title level={4} style={{ color: "#000" }}>
                  {item.title.slice(0, 100)}...
                </Title>
                
                <div className="content-news">
              <Text style={{ color: "#000" }}>{item.body.slice(0, 80)} ...</Text>
              
             <br/>
              <Button href={item.url} danger target="_blank" style={{  margin: "10px"}} type="primary">
  Read More
</Button>
<br/>
<Text style={{color:"rgb(141 136 136)"}}><strong style={{color : "#000", fontSize: "15px"}}>Published on</strong> {moment(item.date).subtract(10, 'days').calendar()}</Text>



              </div>
                </Flex>
                {item.image?(   <img  style={imgStyle} src={item.image} />) :       (<img style={imgStyle} src="https://cdn.pixabay.com/photo/2018/04/04/15/14/bitcoin-3290060_640.jpg" />) }
             
                </Flex>
            </div>
            
          </Card>
        </Col>
        ))}
        
      </Row>
    </>
  );
};

export default News;
