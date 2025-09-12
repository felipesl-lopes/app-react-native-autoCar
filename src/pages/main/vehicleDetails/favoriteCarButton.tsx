import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { showToast } from '../../../components/showToast';
import { AuthContext } from '../../../contexts/auth.context';
import axiosService from '../../../services/api';
import theme from '../../../styles/theme';

interface IProps {
  id: string | undefined;
}

const FavoriteCarButton: React.FunctionComponent<IProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      await axiosService
        .get('/firestore/favorite', {
          params: {
            uidUser: user?.uid,
            idCar: id,
          },
        })
        .then(({ data }) => setIsFavorite(data.favorite))
        .catch(() => setIsFavorite(false));
    })();
  }, [id, user?.uid]);

  const handleFunction = async () => {
    const data = { uidUser: user?.uid, idCar: id };
    if (isFavorite) {
      setIsFavorite(false);
      await axiosService.delete('/firestore/favorite', { data }).then(() => {
        showToast('success', 'Veículo desfavoritado');
      });
    } else {
      setIsFavorite(true);
      await axiosService.post('/firestore/favorite', data).then(() => {
        showToast('success', 'Veículo favoritado');
      });
    }
  };

  return (
    <Button activeOpacity={0.7} onPress={handleFunction}>
      <TextButton>
        {isFavorite ? 'Desfavoritar veículo' : 'Favoritar veículo'}
      </TextButton>
    </Button>
  );
};

export default FavoriteCarButton;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${theme.pixels.px40};
  border-radius: ${theme.borderRadius.radius4};
  width: 100%;
  height: 48px;
  background-color: orange;
  width: 180px;
  align-self: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
`;
