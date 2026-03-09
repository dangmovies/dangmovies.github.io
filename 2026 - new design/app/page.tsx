import { Header } from "@/components/header"
import { ProjectSection } from "@/components/project-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <Header />
      
      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-20">
        <ProjectSection
          status="In Festival Circuit"
          title="ran som"
          subtitle="12 mins comedy thriller"
          badge="In festival circuit"
          description="Two small-time burglars kidnap the son of a wealthy businessman, demanding twenty thousand dollars. But when they discover that the boy is a victim of harsh discipline at home, they face a moral dilemma that blurs the line between criminals and protectors."
          credits={[
            "Produced by Dila Dokuzoglu, Written and Directed by Richard Dang",
            "Starring Mike Dara, Brendan Tan, Elliot Dahan and Nicco Lorenzo Garcia"
          ]}
          acknowledgement="We acknowledge the support of the Ontario Council for the Arts and Canada Council for the Arts."
          posterUrl="https://dangmovies.ca/2025_showcase_rs_poster.webp"
        />

        <ProjectSection
          status="In Development"
          title="where the cambodian restaurants at"
          subtitle="series development"
          description="A series that follows a cross-Canada journey to uncover and document the hidden stories, flavours, and cultural significance of Cambodian cuisine, highlighting a community's rare culinary presence and resilience within Canada's diverse food landscape."
          acknowledgement="We acknowledge the support of the Canada Council for the Arts & the Cambodian Association of Ottawa-Valley."
          posterUrl="https://dangmovies.ca/2025_showcase_wtcra_poster.webp"
        />

        <ProjectSection
          status="In Festival Circuit"
          title="record pause record"
          subtitle="27 mins documentary"
          badge="In festival circuit"
          description="In 1998, a ten-year-old kid from Toronto becomes inspired by homemade action movies shot in his community. Decades later, after giving up on filmmaking, he sets out to reconnect with the maker of those action movies, hoping to understand what became of his inspiration's dream and what that might mean for his own."
          credits={[
            "Produced, Written and Directed by Richard Dang"
          ]}
          acknowledgement="Produced with the support of the City of Toronto through Toronto Arts Council."
          posterUrl="https://dangmovies.ca/2025_showcase_rpr_poster.webp"
        />
      </div>
    </main>
  )
}
