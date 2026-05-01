export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  content: string[];
  keywords: string[];
};

import painting1 from "@/assets/art-painting-1.jpg";
import painting2 from "@/assets/art-painting-2.jpg";
import sculpture1 from "@/assets/art-sculpture-1.jpg";
import sculpture2 from "@/assets/art-sculpture-2.jpg";
import craft1 from "@/assets/art-craft-1.jpg";
import craft2 from "@/assets/art-craft-2.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import terrace from "@/assets/terrace.jpg";

export const blogPosts: BlogPost[] = [
  {
    slug: "art-contemporain-benin-parakou",
    title: "L'art contemporain au Bénin : Parakou, nouvelle capitale créative",
    excerpt:
      "Découvrez comment Parakou s'impose comme un pôle artistique incontournable de l'Afrique de l'Ouest, entre tradition et modernité.",
    category: "Art & Culture",
    date: "2026-04-12",
    readTime: "6 min",
    cover: painting1,
    keywords: ["art contemporain Bénin", "Parakou art", "galerie Parakou", "ARTISTIK"],
    content: [
      "Au cœur du nord du Bénin, Parakou vit une véritable renaissance créative. Galeries indépendantes, ateliers d'artisans et collectifs d'artistes redessinent le paysage culturel de la ville.",
      "ARTISTIK incarne cette dynamique : un espace où la peinture, la sculpture et l'artisanat dialoguent avec la cuisine d'auteur pour offrir une expérience sensorielle complète.",
      "L'art contemporain béninois puise sa force dans une histoire millénaire — masques, bronzes, textiles royaux — qu'il réinterprète avec une audace résolument moderne.",
      "Visiter Parakou aujourd'hui, c'est rencontrer une scène vibrante, accessible, et profondément ancrée dans son territoire. Une destination artistique à part entière.",
    ],
  },
  {
    slug: "guide-collectionner-oeuvres-africaines",
    title: "Guide : comment commencer une collection d'œuvres africaines",
    excerpt:
      "Nos conseils pour bâtir une collection d'art africain authentique, durable, et porteuse de sens — même avec un budget modeste.",
    category: "Conseils",
    date: "2026-04-05",
    readTime: "8 min",
    cover: sculpture1,
    keywords: ["collection art africain", "acheter œuvre Bénin", "art investissement"],
    content: [
      "Commencer une collection d'art ne demande pas une fortune, mais une démarche : curiosité, rencontres, et confiance dans son propre regard.",
      "Privilégiez les œuvres signées, accompagnées d'un certificat d'authenticité. Une pièce documentée garde sa valeur — symbolique et patrimoniale — au fil du temps.",
      "Visitez les galeries, échangez avec les artistes, suivez leurs parcours. Une collection vit autant des œuvres que des histoires qui les entourent.",
      "Chez ARTISTIK, chaque pièce est unique, signée, et accompagnée. Nous guidons les nouveaux collectionneurs comme les amateurs avertis.",
    ],
  },
  {
    slug: "cuisine-beninoise-art-saveurs",
    title: "La cuisine béninoise : un art des saveurs à redécouvrir",
    excerpt:
      "Igname, poisson grillé, sauces aux épices locales : la gastronomie béninoise est un patrimoine vivant, créatif et infiniment savoureux.",
    category: "Gastronomie",
    date: "2026-03-28",
    readTime: "5 min",
    cover: dish1,
    keywords: ["cuisine béninoise", "gastronomie Bénin", "restaurant Parakou"],
    content: [
      "La cuisine béninoise est un art de l'équilibre : entre force des épices, douceur des féculents et fraîcheur des légumes du marché.",
      "Sur la terrasse d'ARTISTIK, nos chefs revisitent les classiques — igname pilée, poisson au feu de bois, sauces aux herbes — avec un dressage inspiré de l'art contemporain.",
      "Manger devient alors une expérience artistique : chaque assiette se contemple autant qu'elle se savoure.",
      "Une invitation à redécouvrir le terroir béninois sous un jour nouveau, raffiné et profondément authentique.",
    ],
  },
  {
    slug: "sculpture-bois-savoir-faire-beninois",
    title: "La sculpture sur bois au Bénin : un savoir-faire ancestral",
    excerpt:
      "Du masque cérémoniel à la statue contemporaine, la sculpture sur bois reste l'une des expressions les plus puissantes de l'art béninois.",
    category: "Artisanat",
    date: "2026-03-20",
    readTime: "7 min",
    cover: sculpture2,
    keywords: ["sculpture bois Bénin", "art ancestral", "masque africain"],
    content: [
      "La sculpture sur bois traverse les siècles au Bénin. Chaque geste de l'artisan perpétue un savoir transmis de maître à apprenti, dans le respect du matériau et du sens.",
      "Les essences locales — iroko, ébène, teck — sont travaillées à la main, polies à l'huile, et patinées avec une patience rare.",
      "Nos sculptures racontent des récits : maternité, force, sagesse, mémoire. Chaque pièce est unique, signée, et disponible à la commande.",
      "Acquérir une sculpture, c'est inviter chez soi une part vivante de la culture béninoise.",
    ],
  },
  {
    slug: "tissage-textile-indigo-or",
    title: "Tissage royal : l'élégance des textiles indigo et or",
    excerpt:
      "Les textiles tissés à la main du Bénin allient motifs ancestraux et raffinement contemporain. Plongée dans un art textile d'exception.",
    category: "Artisanat",
    date: "2026-03-12",
    readTime: "6 min",
    cover: craft2,
    keywords: ["tissage Bénin", "textile africain", "indigo"],
    content: [
      "Le tissage est l'un des arts les plus anciens d'Afrique de l'Ouest. Au Bénin, les motifs indigo et or évoquent la royauté et la mémoire des familles.",
      "Chaque fil est tendu à la main, chaque motif raconte un proverbe ou une lignée. Le geste lent du tisserand donne au textile une âme qu'aucune machine ne peut imiter.",
      "Nos éditions limitées sont conçues pour durer : pièces décoratives, étoles, ou compositions à encadrer.",
      "Un textile d'art, c'est une œuvre que l'on porte, que l'on touche, que l'on transmet.",
    ],
  },
  {
    slug: "ingredients-locaux-cuisine-naturelle",
    title: "5 ingrédients locaux qui réinventent la cuisine béninoise",
    excerpt:
      "Du fonio au piment Adjoua, découvrez les ingrédients du terroir qui inspirent notre cuisine artistique et naturelle.",
    category: "Gastronomie",
    date: "2026-03-04",
    readTime: "5 min",
    cover: dish2,
    keywords: ["ingrédients Bénin", "cuisine naturelle", "produits locaux"],
    content: [
      "Le fonio, céréale ancestrale, fait son grand retour dans la haute gastronomie pour sa finesse et sa richesse nutritionnelle.",
      "Le piment Adjoua, l'huile rouge de palme artisanale, le moringa et l'igname jaune composent notre palette quotidienne.",
      "Travailler local, c'est soutenir les producteurs, garantir la fraîcheur, et offrir une assiette honnête.",
      "Notre cuisine célèbre ces trésors du terroir avec créativité — sans additifs, sans compromis.",
    ],
  },
  {
    slug: "peinture-contemporaine-feuille-or",
    title: "Peinture contemporaine et feuille d'or : un dialogue précieux",
    excerpt:
      "L'incrustation d'or dans la peinture contemporaine africaine raconte une histoire de noblesse, de mémoire et de modernité.",
    category: "Art & Culture",
    date: "2026-02-22",
    readTime: "6 min",
    cover: painting2,
    keywords: ["peinture africaine", "feuille d'or", "art contemporain"],
    content: [
      "La feuille d'or n'est pas qu'un ornement : c'est un langage. Elle évoque la lumière sacrée, la valeur du sujet, et le geste précieux du peintre.",
      "Dans nos créations, l'or dialogue avec les pigments naturels, le bleu profond, et les noirs veloutés pour créer des tensions visuelles puissantes.",
      "Chaque tableau devient un objet d'émotion : une pièce qui change de visage selon la lumière du jour.",
      "Une œuvre signée à acquérir comme on adopte un être vivant — pour la regarder, la faire vivre, la transmettre.",
    ],
  },
  {
    slug: "experience-galerie-restaurant",
    title: "Quand la galerie rencontre le restaurant : l'expérience ARTISTIK",
    excerpt:
      "Allier art visuel et art culinaire dans un même lieu : un concept rare qui fait de chaque visite un moment hors du temps.",
    category: "Lifestyle",
    date: "2026-02-14",
    readTime: "5 min",
    cover: terrace,
    keywords: ["concept galerie restaurant", "lieu Parakou", "expérience art"],
    content: [
      "ARTISTIK n'est ni tout à fait une galerie, ni tout à fait un restaurant. C'est un lieu où les sens se rencontrent.",
      "On y déambule entre les œuvres, on s'attable sur la terrasse, on commande un plat dressé comme une toile. Le temps ralentit.",
      "Ce concept — rare en Afrique de l'Ouest — répond à une envie profonde : vivre l'art, ne pas seulement le regarder.",
      "Que vous veniez pour une œuvre, un repas, ou simplement pour respirer, ARTISTIK vous accueille comme un atelier ouvert.",
    ],
  },
  {
    slug: "poterie-vannerie-tresors-argile",
    title: "Poterie et vannerie : les trésors d'argile du Bénin",
    excerpt:
      "L'art de la terre cuite et du tressage perpétue un dialogue intime entre les mains de l'artisan et la matière.",
    category: "Artisanat",
    date: "2026-02-06",
    readTime: "6 min",
    cover: craft1,
    keywords: ["poterie Bénin", "vannerie", "artisanat africain"],
    content: [
      "L'argile et la fibre végétale sont les matières premières les plus humbles — et pourtant les plus expressives — de l'artisanat béninois.",
      "Nos poteries sont façonnées sans tour, à la main, puis cuites au feu de bois selon des techniques transmises depuis des générations.",
      "La vannerie, elle, joue avec les couleurs naturelles et les motifs géométriques : des œuvres utiles, durables, et profondément belles.",
      "Acquérir un objet artisanal, c'est honorer un geste, une lignée, et un territoire.",
    ],
  },
  {
    slug: "poisson-grille-feu-bois-art-cuisson",
    title: "Le poisson grillé au feu de bois : un art de la cuisson",
    excerpt:
      "Cuisson lente, fumée légère, herbes fraîches : le poisson grillé est l'un des sommets discrets de la cuisine béninoise.",
    category: "Gastronomie",
    date: "2026-01-28",
    readTime: "5 min",
    cover: dish3,
    keywords: ["poisson grillé Bénin", "feu de bois", "cuisson naturelle"],
    content: [
      "Griller un poisson au feu de bois ne s'improvise pas. C'est une affaire de patience, de température, et de respect du produit.",
      "Notre capitaine est mariné le matin même aux herbes fraîches du jardin, puis cuit lentement sur braises sélectionnées.",
      "La chair reste fondante, la peau croustille à peine, et la fumée parfume sans masquer.",
      "Servi avec des légumes du marché et une sauce citronnée maison, c'est notre hommage à la cuisine vraie — celle qui ne triche pas.",
    ],
  },
];
