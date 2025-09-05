import React, { useContext, useEffect, useState } from 'react';
// import { ICarList } from "../../../interface";
import ComponentVerifielEmail from '../../../components/componentVerifieldEmail';
import ContainerComponent from '../../../components/container';
import CarList from '../../../components/lists/carList';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import { ICarList } from '../../../interface';
import axiosService from '../../../services/api';
import { Title } from '../styled';

const MyFavorites: React.FunctionComponent = () => {
  const { emailVerified, user } = useContext(AuthContext);
  const [carList, setCarList] = useState<ICarList[]>([]);

  useEffect(() => {
    (async () => {
      const uidUser = user?.uid;
      await axiosService
        .get('/firestore/carList/favorites', { params: { uidUser } })
        .then(({ data }) => {
          let list = [] as ICarList[];
          setCarList([]);
          data.forEach((doc: ICarList) => {
            list.push({
              uidUser: doc.uidUser,
              id: doc.id,
              name: doc.name,
              year: doc.year,
              price: doc.price,
              city: doc.city,
              km: doc.km,
              images: doc.images,
              uf: doc.uf,
              model: doc.model,
            });
          });
          setCarList(list);
        })
        .catch(() => {
          // toast.error('Erro ao exibir veículos');
        });

      console.log('Carregou');

      return;
    })();
  }, [user?.uid]);

  if (!emailVerified) {
    return (
      <ComponentVerifielEmail
        email={user?.email as string}
        title="Meus favoritos"
        text="Verifique seu e-mail para adicionar seus favoritos."
      />
    );
  }

  return (
    <ContainerComponent>
      <Title>Meus favoritos</Title>

      <Spacer spacing={3} />

      <CarList data={carList} message="Você não favoritou nenhum veículo." />
    </ContainerComponent>
  );
};

export default MyFavorites;
