import { Card, Col, Input, Row } from 'antd'
import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/coinsApi'
import { Link } from 'react-router-dom';
import millify from 'millify';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [crypto, setCrypto] = useState(data?.data?.coins);

  if (isFetching) return <div>Loading...</div>;


  return (
    <div>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto"
            onChange={(e) =>
              setCrypto(
                data?.data?.coins.filter((currency) =>
                  currency.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              )
            }
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto &&
          crypto?.map((currency,index) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
          
              className="crypto-card"
              key={index}
            >
              <Link key={currency.uuid} to={`/Cryptodetails/${currency.uuid}`}>
                <Card
                
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt={`${currency.name} icon`}
                    />
                  }
                  hoverable
                >
                  <p>Price: ${millify(currency.price)}</p>
                  <p>Market Cap: ${millify(currency.marketCap)}</p>
                  <p>Daily Change: ${millify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
