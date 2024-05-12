import { Container } from "@/blocks/Container/Container";
import { Spacer } from "@/blocks/Spacer/Spacer";
import { Heading } from "@/elements/Heading/Heading";

type HeroProps = {
  title: string;
  children: React.ReactNode;
};

export const Hero = ({ title, children }: HeroProps) => (
  <div>
    <Container>
      <Spacer>
        <Heading
          variant="h1"
          style="h1"
          className="mb-4 sm:mb-8 sm:max-w-[90%]"
        >
          {title}
        </Heading>
        {children}
      </Spacer>
    </Container>
  </div>
);
