import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps
} from "../../components/TransactionCard";


import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvovimento de apps",
      amount: "R$ 10.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "10/01/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 15,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "10/12/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel de apartamento",
      amount: "R$ 300,00",
      category: { name: "Moradia", icon: "home" },
      date: "10/01/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/85654165?v=4",
              }}
            />
            <User>
              <UserGreetings>Olá, </UserGreetings>
              <UserName>Philipe</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="1.000,00"
          lastTransaction="Há 5 dias"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="500,00"
          lastTransaction="Há 2 dias"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="500,00"
          lastTransaction="Há 1 dia"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
          // showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ paddingBottom: getBottomSpace() }}
        />
      </Transactions>
    </Container>
  );
}
