import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useCouponDetail } from '../../hooks/Main/useCouponDetail';
import { Coupon, CouponDetail } from '../../types/coupon';
import Button from '../@shared/Button';
import CloseButton from '../@shared/CloseButton';
import PageSlider from '../@shared/PageSlider';
import CouponDetailCoupon from './ConponDetail.coupon';
import CouponDetailReservation from './CouponDetail.reservation';

const CouponDetail = ({ couponId }: { couponId: number }) => {
  const { couponDetail, buttonOptions, close } = useCouponDetail(couponId);

  return (
    <S.Container>
      <S.Modal>
        <S.Header>
          <CloseButton onClick={close} color='white' />
        </S.Header>
        <PageSlider>
          <CouponDetailCoupon coupon={couponDetail?.coupon as Coupon} />
          {couponDetail?.coupon.status !== 'not_used' ? (
            <CouponDetailReservation couponDetail={couponDetail as CouponDetail} />
          ) : (
            <S.EmptyReservationPage>아직 예약 정보가 없습니다.</S.EmptyReservationPage>
          )}
        </PageSlider>
        <S.Footer>
          <S.ButtonWrapper>
            {buttonOptions.map((button, idx) => (
              <Button key={idx} {...button}>
                {button.text}
              </Button>
            ))}
          </S.ButtonWrapper>
        </S.Footer>
      </S.Modal>
    </S.Container>
  );
};

export default CouponDetail;

const S = {
  Container: styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    width: 28rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    border-radius: 5px;
    background-color: #232323;
    padding: 2rem;

    animation: subtle-pop-up 0.2s forwards;
    @keyframes subtle-pop-up {
      from {
        transform: scale(0.9), translate(-50%, -50%);
        opacity: 0;
      }

      to {
        transform: scale(1), translate(-50%, -50%);
        opacity: 1;
      }
    }
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 10%;
    width: 106%;
  `,
  Modal: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #232323;
    padding: 1rem;
    display: flex;
    flex-flow: column;
  `,
  Footer: styled.div`
    display: flex;
    justify-content: center;
    height: 15%;
    align-items: flex-end;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    width: 100%;
    gap: 5px;
  `,

  UseCouponLink: styled(Link)`
    width: 100%;
  `,
  EmptyReservationPage: styled.div`
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    align-self: center;
    justify-content: center;
  `,
};
