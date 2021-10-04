import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BlogItem from "./BlogItem";

export default function BlogList() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} container xs={12}>
        {[
          {
            id: 9429,
            category: "Uncategorized",
            title:
              "Guida completa su come configurare i DNS per puntare al tuo e-commerce VetrinaLive",
            read_time: "4",
            link: "https://vetrinalive.it/blog/guida-completa-su-come-configurare-i-dns/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2021/08/Vetrinalive-DNS-Blog.png",
          },
          {
            id: 9314,
            category: "Aggiornamenti Vetrina Live",
            title: "Vetrina Live: un orgoglio italiano",
            read_time: "1",
            link: "https://vetrinalive.it/blog/vetrina-live-un-orgoglio-italiano/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2021/05/DSC01385.jpg",
          },
          {
            id: 6653,
            category: "Marketing",
            title:
              "Come registrare la tua attivit\u00e0 su Google My Business e Google Maps",
            read_time: "6",
            link: "https://vetrinalive.it/blog/come-registrarti-su-google-my-business-e-google-maps/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2021/01/google-my-business.jpg",
          },
          {
            id: 6441,
            category: "Ecommerce",
            title: "Come fare da soli le foto per ecommerce in 8 step",
            read_time: "8",
            link: "https://vetrinalive.it/blog/come-fare-da-soli-le-foto-per-ecommerce-in-8-step/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2020/12/pexels-cottonbro-3584927-scaled.jpg",
          },
          {
            id: 6209,
            category: "Marketing",
            title: "5 Dritte su come vendere quadri online",
            read_time: "5",
            link: "https://vetrinalive.it/blog/5-dritte-su-come-vendere-quadri-online/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2020/12/pexels-snow-white-2721507-scaled.jpg",
          },
          {
            id: 5874,
            category: "Ecommerce",
            title: "Come guadagnare online: 7 idee per te",
            read_time: "5",
            link: "https://vetrinalive.it/blog/come-guadagnare-online-7-idee-per-te/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2020/12/pexels-vlada-karpovich-4050291-scaled.jpg",
          },
          {
            id: 5132,
            category: "Ecommerce",
            title:
              "Come fare consegne a domicilio: 4 utili segreti per la ristorazione",
            read_time: "5",
            link: "https://vetrinalive.it/blog/come-fare-consegne-a-domicilio-4-utili-segreti-per-la-ristorazione/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2020/11/pexels-polina-tankilevitch-4440877-scaled.jpg",
          },
          {
            id: 4614,
            category: "Ecommerce",
            title: "Come aprire un negozio di abbigliamento online",
            read_time: "6",
            link: "https://vetrinalive.it/blog/come-aprire-un-negozio-di-abbigliamento-online/",
            image_url:
              "https://vetrinalive.it/wp-content/uploads/2020/11/pexels-cottonbro-5076511-scaled.jpg",
          },
        ].map((poste, idx) => (
          <BlogItem
            key={poste.id}
            image_url={poste.image_url}
            category={poste.category}
            title={poste.title}
            link={poste.link}
            read_time={poste.read_time}
          />
        ))}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
