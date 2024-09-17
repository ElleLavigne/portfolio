import ScrollAnimation from "react-animate-on-scroll"

export function Animation({ children, animation = "fadeUp" }) {
  return (
    <>
      <ScrollAnimation
        animateIn={animation}
        offset={130}
        animateOnce={true}
        animatePreScroll={false}
      >
        {children}
      </ScrollAnimation>
    </>
  )
}
