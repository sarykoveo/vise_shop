import React, { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import styles from "../../styles/BasketPage.module.scss";
import BasketGood from "../../components/UI/BasketGood";
import { $getBasket } from "../../http/basketApi";
import axios from "axios";

const BasketPage = () => {
  const [userBasket, setUserBasket] = useState([]);
  const getBasket = async () => {
    const userId = 1;
    const { data } = await axios.post(
      "http://localhost:5000/api/basket/getUsersBasket",
      { userId: userId }
    );
    // setUserBasket(data["rows"]);
    console.log(data["rows"], 100);
  };

  useEffect(() => {
    getBasket();
  }, []);
  return (
    <MainLayout>
      <section className={styles.basket__container}>
        <h5 className={styles.page__title}>Корзина</h5>
        <div className={styles.card__container}>
          <BasketGood />
        </div>
        <div className={styles.total__basket__summ}>
          <div className={styles.total__summ__container}>
            <div className={styles.total__result}>
              <h3 className={styles.basket__title}>Ваша корзина</h3>
              <div className={styles.good__amount}>
                <span>Кол-во товаров</span>
                <span>3</span>
              </div>
              <div className={styles.basket__price}>
                <span>Сумма заказа</span>
                <span>
                  375<i>₽</i>
                </span>
              </div>
              <div className={styles.basket__price}>
                <span>Кол-во товаров</span>
                <span>
                  375<i>₽</i>
                </span>
              </div>
              <div className={styles.total__price}>
                <span>Общая стоимость</span>
                <span>
                  375<i>₽</i>
                </span>
              </div>
            </div>
            <div className={styles.order__button}>Оформить заказ</div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BasketPage;
