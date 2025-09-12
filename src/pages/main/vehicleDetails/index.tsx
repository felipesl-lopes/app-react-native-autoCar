/* eslint-disable react-native/no-inline-styles */
import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Linking, ScrollView, View } from 'react-native';
import ContainerComponent from '../../../components/container';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import { getDataAdFirestore } from '../../../functions/firestore';
import { IFormNewCar } from '../../../interface/car';
import FavoriteCarButton from './favoriteCarButton';

import CarouselCars from '../../../components/carouselCars/list';
import LoadScreenIndicator from '../../../components/loadScreenIndicator';
import {
  Button,
  ButtonShared,
  ContainerAlign,
  ContainerItem,
  Data,
  LogoButton,
  Main,
  Name,
  Price,
  Text,
  TextButton,
  TextButtonShared,
  Title,
} from './styled';

const VehicleDetails: React.FunctionComponent = () => {
  const route = useRoute();
  const id = route?.params;
  const [car, setCar] = useState<IFormNewCar | null>();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Função assíncrona para buscar dados do anuncio no DB.
   */
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let isMounted = true;

    (async () => {
      await getDataAdFirestore(id as any)
        .then((data: IFormNewCar) => {
          setCar(data);
        })
        .catch(() => {})
        .finally(() => {
          setLoading(false);
        });
    })();

    return () => {
      isMounted = false;
      setCar(null);
      setLoading(true);
    };
  }, [id]);

  const openWhatsapp = () => {
    let phone = `+55${car?.whatsapp}`;
    let message = `Olá, tudo bem? O veículo ${car?.name} ${car?.model} ainda está disponível?`;
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch(() => {
      Alert.alert(
        'Erro',
        'Não foi possível abrir o WhatsApp neste dispositivo.',
      );
    });
  };

  /**
   * Função para excluir o veículo a venda.
   */
  const deleteAd = async () => {
    // const confirm = window.confirm(
    //   'Você deseja realmente excluir esse anúncio?',
    // );
    // if (confirm) {
    //   let data = { imgList: car?.images };
    //   await axiosService
    //     .delete(`/firestore/deleteAd/${id}`, { data })
    //     .then(() => {
    //       toast.success('Anúncio deletado com sucesso!');
    //       navigate('/dashboard/meus-veiculos');
    //     })
    //     .catch(() => toast.error('Erro ao tentar deletar o anúncio.'));
    // }
  };

  if (loading) {
    return <LoadScreenIndicator />;
  }

  return (
    <ScrollView>
      <CarouselCars
        data={
          car?.images.map((img, index) => ({
            id: index.toString(),
            uri: img.url,
          })) || []
        }
        onPress={() => {}}
      />

      <ContainerComponent>
        <Main>
          <ContainerItem>
            <Name>
              {car?.name} {car?.model}
            </Name>
          </ContainerItem>

          <ContainerItem>
            <Price>R${car?.price}</Price>
          </ContainerItem>

          <ContainerItem>
            <Title>Informações</Title>

            <ContainerAlign>
              <Text>Ano:</Text>
              <Data> {car?.year}</Data>
            </ContainerAlign>

            <ContainerAlign>
              <Text>Quilometragem:</Text>
              <Data> {car?.km} km</Data>
            </ContainerAlign>
          </ContainerItem>

          {user?.uid !== car?.uidUser && (
            <View>
              <Spacer spacing={5} />
              <FavoriteCarButton id={id as any} />
            </View>
          )}

          <ContainerItem>
            <Title>Especificações</Title>

            <ContainerAlign>
              <Text>Motor:</Text>
              <Data> {car?.engine}</Data>
            </ContainerAlign>

            <ContainerAlign>
              <Text>Câmbio:</Text>
              <Data> {car?.transmission}</Data>
            </ContainerAlign>

            <ContainerAlign>
              <Text>Combustível:</Text>
              <Data> {car?.fuel}</Data>
            </ContainerAlign>
          </ContainerItem>

          <ContainerItem>
            <Title>Condições</Title>

            <ContainerAlign>
              <Text>Estado geral:</Text>
              <Data> {car?.generalCondition}</Data>
            </ContainerAlign>

            <ContainerAlign>
              <Text>Revisões e Manutenções:</Text>
              <Data> {car?.maintenanceHistory}</Data>
            </ContainerAlign>

            <ContainerAlign>
              <Text>Documentação:</Text>
              <Data> {car?.documentationStatus}</Data>
            </ContainerAlign>
          </ContainerItem>

          <ContainerItem>
            <Title>Descrição completa</Title>

            <ContainerAlign>
              <Text>{car?.description}</Text>
            </ContainerAlign>
          </ContainerItem>

          <ContainerItem>
            <Title>Contato do vendedor</Title>

            <ContainerAlign>
              <Text>Vendedor:</Text>
              <Data> {car?.owner}</Data>
            </ContainerAlign>

            <ContainerAlign>
              <Text>Localização: </Text>
              <Data>
                {car?.city}, {car?.uf}
              </Data>
            </ContainerAlign>

            <ContainerAlign>
              <Text>Contato:</Text>
              <Data> {car?.whatsapp}</Data>
            </ContainerAlign>
          </ContainerItem>

          <Spacer spacing={8} />

          {!!user && user?.uid === car?.uidUser ? (
            <Button
              onPress={deleteAd}
              activeOpacity={0.7}
              style={{ backgroundColor: '#3485ff' }}
            >
              <TextButton style={{ color: 'white' }}>
                Excluir anúncio
              </TextButton>
            </Button>
          ) : (
            <Button
              activeOpacity={0.7}
              style={{ backgroundColor: '#25d366' }}
              onPress={openWhatsapp}
            >
              <TextButton>Conversar com o vendedor</TextButton>
              <LogoButton style={{ marginLeft: 8 }} name="logo-whatsapp" />
            </Button>
          )}

          <Spacer spacing={2} />

          <ButtonShared>
            <LogoButton name="logo-whatsapp" color={'#25d366'} />
            <TextButtonShared>Compartilhe no Whatsapp</TextButtonShared>
          </ButtonShared>
        </Main>

        <Spacer spacing={15} />
      </ContainerComponent>
    </ScrollView>
  );
};

export default VehicleDetails;
