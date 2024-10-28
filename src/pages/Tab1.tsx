import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import {
  logoBitcoin,
  logoDiscord,
  logoDocker,
  logoGithub,
  logoInstagram,
  logoIonic,
  logoJavascript,
  logoLaravel,
  logoLinkedin,
  logoNodejs,
  logoPython,
  logoReact,
  logoSteam,
  logoVercel,
  logoXbox,
  logoYoutube,
} from "ionicons/icons";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ fontSize: "16px" }}>
              Halo Panky Bintang Pradana Yosua
            </IonCardTitle>
            <IonCardSubtitle>H1D022077</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Mahasiswa Informatika Unsoed memiliki minat kepada machine learning
            dan software engineering.
          </IonCardContent>
        </IonCard>

        <IonList>
          <IonItem href="https://github.com/bintangyosua">
            <IonIcon icon={logoGithub} style={{ marginRight: "10px" }} />
            <IonLabel>github.com/bintangyosua</IonLabel>
          </IonItem>
          <IonItem href="https://linkedin.com/bintangyosua">
            <IonIcon icon={logoLinkedin} style={{ marginRight: "10px" }} />
            <IonLabel>linkedin.com/bintangyosua</IonLabel>
          </IonItem>
          <IonItem href="https://youtube.com/@minuettaro">
            <IonIcon icon={logoYoutube} style={{ marginRight: "10px" }} />
            <IonLabel>youtube.com/@minuettaro</IonLabel>
          </IonItem>
          <IonItem href="https://steamcommunity.com/profiles/76561199433980944/">
            <IonIcon icon={logoSteam} style={{ marginRight: "10px" }} />
            <IonLabel>Skyfel</IonLabel>
          </IonItem>
          <IonItem href="https://instagram.com/itzbintangyosua">
            <IonIcon icon={logoInstagram} style={{ marginRight: "10px" }} />
            <IonLabel>instagram.com/bintangyosua</IonLabel>
          </IonItem>
          <IonItem href="https://www.xbox.com/id-ID/play/user/Minuettaro1802">
            <IonIcon icon={logoXbox} style={{ marginRight: "10px" }} />
            <IonLabel>Minuettaro#1802</IonLabel>
          </IonItem>
          <IonItem>
            {[
              logoPython,
              logoJavascript,
              logoReact,
              logoIonic,
              logoNodejs,
              logoLaravel,
              logoVercel,
              logoDocker,
              logoBitcoin,
            ].map((item) => (
              <IonIcon icon={item} style={{ marginRight: "10px" }} />
            ))}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
