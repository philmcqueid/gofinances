import React, {useState} from 'react';
import {Modal} from 'react-native';

import {
    Container, Header, Title, Form, Fields, TransactionsType,
} from './styles';

import {Input} from '../../components/Forms/Input';
import {Button} from '../../components/Forms/Button';
import {
    TransactionTypeButton
} from '../../components/Forms/TransactionTypeButton';

import {
    CategorySelectButton
} from '../../components/Forms/CategorySelectButton';

import {CetegorySelect} from '../CategorySelect';

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        icon: 'any',
    });

    function handleTransactionsSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    {/* nome */}
                    <Input placeholder="Nome"/>
                    {/* preço */}
                    <Input placeholder="Preço"/>
                    <TransactionsType>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionsSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionsSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionsType>
                    <CategorySelectButton
                        title="Categorias"
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>

                <Button title="Enviar"/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CetegorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    );
}
