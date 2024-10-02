import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import { Typography } from "@alfalab/core-components/typography";
import { useCallback, useState } from "react";

import alfa from "./assets/alfa-card.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Radio } from "@alfalab/core-components/radio";
import { Collapse } from "@alfalab/core-components/collapse";
import { List } from "@alfalab/core-components/list";
import { sendDataToGA } from "./utils/events.ts";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [expanded, setExpanded] = useState<boolean>(false);
  const [triggered, setTriggered] = useState<boolean>(false);

  const clickDetails = () => {
    window.gtag("event", "sub_hidden_3339_2_click");
  };

  const submit = useCallback(() => {
    setLoading(true);
    sendDataToGA({
      sub_choice: "AlfaSmart",
      sub_hidden: expanded ? "Yes" : "No",
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}
        >
          <img
            alt="Картинка карты"
            src={alfa}
            height={48}
            style={{ objectFit: "contain" }}
          />
          <Typography.Text
            style={{ maxWidth: "230px", marginLeft: "18px" }}
            view="primary-medium"
          >
            Альфа-карта
          </Typography.Text>
        </div>

        <Typography.TitleResponsive
          style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}
          tag="h3"
          view="xsmall"
          font="system"
          weight="semibold"
        >
          Способ уведомлений
        </Typography.TitleResponsive>

        <Radio
          className={appSt.radio}
          size={24}
          checked={true}
          label="Альфа Смарт — 299 руб. в месяц"
          disabled={false}
          hint="Дополнительные возможности, вместе с пуш-уведомлениями"
          block={true}
        />
        <Collapse
          collapsedLabel="Что входит"
          expandedLabel="Скрыть"
          className={appSt.collapse}
          onExpandedChange={(expanded) => {
            clickDetails();
            setTriggered(true);
            if (!triggered) {
              setExpanded(expanded);
            }
          }}
        >
          <List tag="ul" marker="•">
            <List.Item>+1 топовая категория кэшбэка</List.Item>
            <List.Item>+1 попытка крутить барабан суперкэшбэка</List.Item>
            <List.Item>Секретная подборка партнёров с кэшбэков</List.Item>
            <List.Item>Увеличенный лимит кэшбэка</List.Item>
            <List.Item>+1% годовых</List.Item>
            <List.Item>Бесплатные уведомления</List.Item>
            <List.Item>Бесплатные переводы</List.Item>
            <List.Item>Бесплатное снятие наличных</List.Item>
            <List.Item>Скидка 20% на комиссию на бирже</List.Item>
          </List>
        </Collapse>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
