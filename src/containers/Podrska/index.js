import React from 'react'
import PodrskaCard from './components/PodrskaCard/PodrskaCard'
function Podrska() {
  return (
    <div style={{ display: "flex", marginLeft: "42.25px" }}>
      <PodrskaCard
        buttonClassname="kontakt-button"
        iconClassname="prijava-icon-podrska"
        title="Grafička podrška"
        text="Nas graficki tim stoji vam na raspolaganju za izradu grafickih materijala koji ce vasim kupcima zaista ponuditi dodatni Kusur.."
        data={["Brendiranje objekata", "Izrada grafičkog profila", "Priprema kupona i banera"]}
      />
      <PodrskaCard
        buttonClassname="kontakt-button-1"
        iconClassname="prijava-icon-podrska-1"
        title="Planiranje loyalty strategije"
        text="Niste sigurni kako privuci veci broj kupaca? Trebate pomoc pri implementaciji programa lojalnosti? Naš konsultantski tim ce vam pomoci da sa Kusurom nudite vise u svakom trenutku."
        data={["Analiza i uvid u vase trenutno stanje na trzistu", "Marketing strategija", "Podrska u implementaciji i realizaciji postavljenih ciljeva", "Podrska u plasiranju i upravljanju programom lojalnosti"]}
      />
    </div>
  )
}

export default Podrska