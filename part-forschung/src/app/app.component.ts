import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';

interface ParagraphWithLink {
  readonly pieces: Array<Text|Link>;
}

interface Text {
  type: 'TEXT',
  content: string;
}

interface Link {
  type: 'LINK',
  content: string;
  href: string;
}

interface QuestionAnswer {
  readonly question: string;
  readonly answerParagraphs: ParagraphWithLink[];
  readonly href: string;
}

function simpleParagraph(content: string): ParagraphWithLink {
  return {pieces: [text(content)]};
}

function text(content: string): Text {
  return {type: 'TEXT', content};
}

function link(content: string, href: string): Link {
  return {type: 'LINK', content, href};
}

const QUESTION_ANSWERS: QuestionAnswer[] = [
  {
    question: "Was ist Sozialwissenschaft?",
    answerParagraphs: [
      simpleParagraph("Sozialwissenschaften (auch Gesellschaftswissenschaften) untersuchen das gesellschaftliche Zusammenleben der Menschen. Zu ihnen zählen beispielsweise Fächer wie die Soziologie, die Kommunikationswissenschaft, die Pädagogik, die Politikwissenschaft oder die Gesundheitswissenschaften.")],
    href: "was-ist-sozialwissenschaft",
  }, {
    question: "Was ist partizipative Forschung?",
    answerParagraphs: [
      simpleParagraph("So verschieden die fachlichen Ausrichtungen innerhalb der Sozialwissenschaften sind, so verschieden sind auch die Forschungsstile (Die Art und Weise, wie sich einer Fragestellung genähert wird) der forschenden Sozialwissenschaftler*innen. Einen noch relativ neuen Forschungsstil stellt dabei die Partizipative Forschung dar."),
      simpleParagraph("Das Schlüsselelement der Partizipativen Forschung ist die Verschränkung der Perspektiven aus Wissenschaft und Praxis und die Beteiligung von von der Forschung Betroffenen Personen am Forschungsprozess. Der/die Wissenschaftler*in forscht somit nicht allein, sondern sucht sich eine/n Partner*in, der/die in dem gesellschaftlichen Bereich, der für den/die Wissenschaftler/in von Interesse ist, praktisch (z.B. beruflich oder auch privat im alltäglichen Leben) tätig ist, den/die sogenannte/n Praxispartner*in (diese können auch mehrere Personen sein). Der/die Praxispartner*in wird schließlich von Beginn an am gesamten Forschungsprozesses, von der Auswahl der Fragestellung bis hin zur Ergebnissicherung, beteiligt und kann so die Forschung gleichberechtigt mitgestalten und seine eigene Erfahrung und Expertise in das Projekt einbringen."),
    ],
    href: "was-ist-partizipative-forschung",
  },{
    question: "Wie ist partizipative Forschung entstanden?",
    answerParagraphs: [
      simpleParagraph("Die partizipative Forschung nahm 1946 ihren Ursprung im Konzept der Aktionsforschung nach Kurt Lewin. Lewin begann mit seinem Konzept das traditionelle Wissenschaftsverständnis, die strikte Trennung zwischen Wissenschaft und Praxis, kritisch zu hinterfragen und forderte, dass wissenschaftliche Arbeit nicht allein dazu dienen sollte eine bestimmte Fragestellung zu beantworten, sondern dazu beitragen sollte, die gesellschaftliche Praxis zu verändern. Die zu untersuchenden Frage- und Problemstellungen sollten darüber hinaus nicht mehr allein dem bloßen Anhäufen von Wissen dienen, sondern sich auch an den konkreten Bedürfnissen der Gesellschaft orientieren."),
      simpleParagraph("Innerhalb Deutschlands erfuhr die Partizipative Forschung seit den 1970-ern zunehmende Beliebtheit und Weiterentwicklung. So existieren heute eine Vielzahl an verschiedenen partizipativen Ansätzen, die jedoch alle die Gemeinsamkeit teilen, die gesellschaftliche Praxis partnerschaftlich, unter Einbezug eines Praxispartners/ einer Praxispartnerin, erforschen und beeinflussen zu wollen, sodass sie nach wie vor unter dem Oberbegriff der Partizipativen Forschung zusammengefasst werden."),
      simpleParagraph("Kritiker*innen und Vertreter*innen eines konservativen/traditionellen Wissenschaftsverständnisses unterstellen partiziaptiven Anästzen häufig einen Mangel an “Wissenschaftlichkeit”, sodass partizipativ zu forschen auch heute noch keine Selbstverständlichkeit ist."),
    ],
    href: "wie-ist-partizipative-forschung-entstanden",
  }, {
    question: "Was ist eigentlich der Unterschied zwischen Wissenschaft und Praxis und warum sollten beide miteinander verbunden werden?",
    answerParagraphs: [
      {pieces: [
        text("Der wesentliche Unterschied zwischen Wissenschaft und Praxis liegt in den verschiedenen Wissensformen, die beide Bereiche hervorbringen. So gewinnt die Wissenschaft über Theorien Wissenschaftswissen, welches ein Erklärungs-, Deutungs- und Problemlösungswissen bereitstellt. Die Praxis hingegen generiert Handlungswissen und steht für ein berufliches Erfahrungswissen, in dem sich Methoden- und Regelwissen mit situativem Alltagswissen verbinden. Die Frage, ob Wissenschaft und Praxis überhaupt als voneinander getrennte Systeme betrachtet werden können ist umstritten und wird unterschiedlich beantwortet "),
        link("Referenz", "https://static.springer.com/sgw/documents/1497288/application/pdf/Text+04+-+Theorie+und+Praxis.pdf"),
        text("."),
      ]},
      simpleParagraph("In der partizipativen Forschung jedenfalls finden beide Formen des Wissens ihre Berechtigung und werden durch die partnerschaftliche Zusammenarbeit von Wissenschaftler*innen und Praxispartner*innen gezielt miteinander verschränkt. Dies hat nicht nur zur Folge, dass das Ergebnis am Ende des Forschungsprojekts sowohl für Praxis als auch für die Wissenschaft nutzbar ist, sondern auch, dass die Forschenden in der laufenden Zusammenarbeit, die Möglichkeit erhalten, sich eben jeweils die andere Wissensform zu Teilen anzueignen, den eigenen Wissenshorizont zu erweitern und am jeweils “gegenüberstehenden” Bereich (Wissenschaft oder Praxis) teilzuhaben."),
    ],
    href: "was-ist-der-unterschied"
  }, {
    question: "Ein Beispiel",
    answerParagraphs: [
      simpleParagraph("Angenommen ein/e Wissenschaftler*in möchte sich im Rahmen einer Forschungsarbeit mit den Auswirkungen von COVID-19 an Schulen auseinandersetzen und entscheidet sich hierfür für die Durchführung einer Partizipativen Forschung. Der/die Wissenschaftler*in würde bei einem partizipativen Forschungsvorhaben nicht bloß Beobachtungen anstellen oder Interviews mit den Betroffenen (z.B. Schüler*innen und Lehrer*innen) durchführen, sondern beispielsweise mehrere Lehrer*innen als Praxispartner*innen von Beginn an an der Forschung beteiligen. Dies meint auch, dass die konkrete Fragestellung der Forschung mit den Lehrer*innen als Praxispartner*innen gemeinsam abgestimmt wird, sodass die Untersuchung dieser Frage für beide Seiten von Interesse und Nutzen ist. So könnte die gemeinsam ausgearbeitete Frage letztendlich lauten, inwiefern Lehrkräfte bei der Durchführung von digitalem Unterricht in Pandemie-Zeiten besser unterstützt werden können. Hierzu könnten der/die forschende Wissenschaftler*in und die Lehrer*innen die nötigen Daten in gemeinsamen Diskussionen erheben oder beispielsweise beschließen eine weitreichende Umfrage unter den Kolleg*innen durchzuführen und auszuwerten, je nachdem, was die beteiligten Seiten für sinnvoll erachten. Als Endprodukt könnte für die Lehrer*innen beispielsweise. ein gemeinsam erarbeitetes Konzept herauskommen, das evtl. als Verbesserungsvorschlag beim Direktorat oder gar dem Bildungsministerium vorgelegt werden könnte. Der/die Wissenschaftler*in hingegen gewinnt evtl. Durch den Einbezug der Perspektive aus der Praxis ganz neuartige Erkenntnisse über bestimmte Muster bei gewissen Problemstellungen und deren Lösungsmöglichkeiten, die für die Theoriebildung oder weitere Forschungsvorhaben von Relevanz sind."),
    ],
    href: "beispiel",
  }, {
    question: "Warum brauchen wir partizipative Forschung?",
    answerParagraphs: [
      simpleParagraph("Wissenschaftliche Theorien, die keine Anwendung finden und praktisches Wissen, das der Wissenschaft unzugänglich bleibt, können durch die partizipative Forschung überwunden werden. So können neue Sichtweisen auf Probleme und kreative Lösungen gewonnen werden, die für Gesellschaft und Wissenschaft von Nutzen sind."),
      simpleParagraph("Durch ihre normative Zielsetzung wirkt die Partizipative Forschung darüber hinaus emanzipierend und demokratiefördernd, indem sie generell Praktiker*innen aber auch gesellschaftlichen Minderheiten oder benachteiligten (Brufs-)Gruppen Gehör und Mitsprache- bzw. Mitgestaltungsrecht im sehr dominanten wissenschaftlichen Diskurs verschafft."),
    ],
    href: "warum-brauchen-wir-partizipative-forschung",
  }, {
    question: "Was sind die Ziele der partizipativen Forschung?",
    answerParagraphs: [
      simpleParagraph("Die Partizipative Forschung hat sich selbst drei maßgebende Ziele auferlegt:"),
      simpleParagraph("1) Die Beteiligung (Partizipation) von nicht-wissenschaftlichen Akteuren als Co-Forscher*innen am Forschungsprozess;"),
      simpleParagraph("2) Stärkung dieser Partner*innen durch Lernprozesse, Kompetenzentwicklung und individuelle und kollektive (Selbst)Befähigung (Empowerment);"),
      simpleParagraph("3) die doppelte Zielsetzung von Erforschung und Veränderung sozialer Wirklichkeit und damit verbunden der Interventionscharakter und die Handlungs-/ Anwendungsorientierung der Forschung."),
    ],
    href: "ziele",
  }, {
    question: "Vorgehensweise",
    answerParagraphs: [
      simpleParagraph("Da Partizipative Forschung ein Forschungsstil und keine festgeschriebene Methode ist, gibt es kein Schema-F in der Vorgehensweise bei der Durchführung eines partizipativen Forschungsprojekts. Grundsätzliche Schritte könnten jedoch sein:"),
      simpleParagraph("1) Finden einer Co-Forscherin/ eines Co-Forschers, die/ der – je nach Ansatz und Anwendungsfeld und Einrichtung – von einer bestimmten Thematik betroffen beziehungsweise in einem Setting aktiv ist."),
      simpleParagraph("2) Gemeinsame Entwicklung von Zielen und eines Studiendesigns. Es können sowohl klassische Methoden der Sozialforschung als auch künstlerische, visuelle und performative Methoden genutzt werden"),
      simpleParagraph("3) Gemeinsame Datenerhebung und -Auswertung, die innerhalb eines zyklischen Prozesses von Aktion und Reflexion vorgenommen werden. Die Erhebung- und Auswertungsstrategie wird dabei maßgeblich durch die Parxispartner*innen mitbestimmt."),
    ],
    href: "vorgehensweise",
  }, {
    question: "Rollenverständnis: Was macht der/die Wisschenschaftler*in, was macht der/die Praxispartner*in. Wer ist für das Projekt verantwortlich und wer übernimmt welche Aufgaben?",
    answerParagraphs: [
      simpleParagraph("Eine erfolgreiche Partizipative Forschung setzt zunächst voraus, dass der Beschluss von Wissenschaftler*in und Praxispartner*innen, in einem Projekt zusammenzuarbeiten, freiwillig gefasst wurde. Beide Seiten begegnen sich mit Respekt und sollten sich ein Mindestmaß an Vertrauen und Offenheit entgegenbringen, das im weiteren Verlauf, aber vor allem zu Beginn der Forschung gefestigt werden sollte."),
      simpleParagraph("Bei der partizipativen Forschung ist es wichtig, dass sich beide Seiten für das gemeinsame Projekt verantwortlich fühlen. Durch die geteilte Verantwortung kann die partizipative Forschung ihrem Ziel, gleichberechtigte Teilhabe im Forschungsprozess zu ermöglichen, überhaupt erst gerecht werden."),
      simpleParagraph("Im idealen Fall übernehmen Wissenschaftler*innen und Praxispartner*innen jeweils gleichermaßen hundert Prozent der Verantwortung für das gemeinsame Projekt. In der konkreten Umsetzung gestaltet sich dies aber häufig ungleichmäßiger und kann an verschiedenen Gründen liegen (z.B. Zurückhaltung seitens der Praxispartner*innen aufgrund von geringer Vertrautheit mit wissenschaftlicher Arbeit). Teil des partizipativen Forschungsprozesses sollte es daher sein, die Rollenverteilung frühzeitig gemeinsam zu klären und transparent zu gestalten sowie im weiteren Verlauf stetig zu reflektieren."),
      simpleParagraph("Die konkrete Aufgabenverteilung im Forschungsprozess ist projektabhängig, kann flexibel gestaltet werden und wird von Praxispartner*innen und Wissenschaftler*innen gemeinsam festgelegt."),
    ],
    href: "rollenverstaendnis",
  },
];

interface Faq {
  readonly id: number;
  readonly question: string;
  readonly answer: string;
}

const FAQS: Faq[] = [
  {id: 1, question: "Question 1", answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
  {id: 2, question: "Question 2", answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'part-forschung';
  questionAnswers = QUESTION_ANSWERS;
  faqs = FAQS;

  expandedFaq?: number;

  toggleFaq(id: number) {
    if (this.expandedFaq === id) {
      this.expandedFaq = undefined;
    } else {
      this.expandedFaq = id;
    }
  }

  isFaqHidden(id: number): boolean {
    return this.expandedFaq !== id;
  }
}