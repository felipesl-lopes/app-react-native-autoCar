import React, { useContext, useEffect, useState } from 'react';
import ComponentVerifielEmail from '../../../components/componentVerifieldEmail';
import ContainerComponent from '../../../components/container';
import CarList from '../../../components/lists/carList';
import { Spacer } from '../../../components/spacer';
import { AuthContext } from '../../../contexts/auth.context';
import { ICarList } from '../../../interface/car';
import axiosService from '../../../services/api';
import { showToast } from '../../../components/showToast';

const MyAds: React.FunctionComponent = () => {
  const { emailVerified, user } = useContext(AuthContext);
  const [carList, setCarList] = useState<ICarList[]>([]);

  useEffect(() => {
    (async () => {
      await axiosService
        .get('/firestore/carList')
        .then(({ data }) => {
          let list = [] as ICarList[];
          setCarList([]);
          data.forEach((doc: ICarList) => {
            if (user?.uid === doc.uidUser) {
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
              });
            }
          });
          setCarList(list);
        })
        .catch(() => {
          showToast('error', 'Erro ao exibir os veículos');
        });
      return;
    })();
  }, [user?.uid]);

  if (!emailVerified) {
    return (
      <ComponentVerifielEmail
        email={user?.email as string}
        title="Meus anúncios"
        text="Verifique seu e-mail para adicionar seus anúncios."
      />
    );
  }

  return (
    <ContainerComponent>
      <Spacer spacing={3} />

      <CarList data={carList} message="Você não favoritou nenhum veículo." />
    </ContainerComponent>
  );
};

export default MyAds;
