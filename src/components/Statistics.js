import React from 'react';
import styled from 'styled-components';

const StatisticsWrapper = styled.section`
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  background-color: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Percentage = styled.span`
  font-size: 18px;
`;

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};

export default Statistics;
