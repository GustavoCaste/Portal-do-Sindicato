import { useState } from 'react'
import Accordion from './components/Accordion'
import Tabs from './components/Tabs'
import Dropdown from './components/Dropdown'

const faq = [
  {
    title: 'Quais são meus direitos trabalhistas básicos?',
    content: 'Carteira assinada, férias remuneradas, 13º salário, FGTS, jornada máxima de 44h semanais e descanso semanal remunerado.',
  },
  {
    title: 'Como funciona a homologação da rescisão?',
    content: 'O filiado pode solicitar ao sindicato a conferência das verbas rescisórias antes de assinar o termo de rescisão.',
  },
  {
    title: 'O que é um acordo coletivo?',
    content: 'É um acordo firmado entre o sindicato e a empresa que define reajustes, benefícios e condições de trabalho da categoria.',
  },
  {
    title: 'Como solicitar suporte jurídico?',
    content: 'Agende um atendimento na sede do sindicato ou pelos canais oficiais. O suporte é gratuito para filiados.',
  },
]

const beneficios = [
  {
    label: 'Saúde e Farmácia',
    content: (
      <ul>
        <li>Plano de saúde com até 30% de desconto</li>
        <li>Descontos em redes de farmácias parceiras</li>
        <li>Atendimento odontológico conveniado</li>
      </ul>
    ),
  },
  {
    label: 'Educação e Cursos',
    content: (
      <ul>
        <li>Bolsas em faculdades parceiras</li>
        <li>Cursos de idiomas com desconto</li>
        <li>Capacitações gratuitas em tecnologia</li>
      </ul>
    ),
  },
  {
    label: 'Lazer e Colônia de Férias',
    content: (
      <ul>
        <li>Colônia de férias no litoral baiano</li>
        <li>Descontos em academias</li>
        <li>Eventos e confraternizações</li>
      </ul>
    ),
  },
]

const documentos = [
  { titulo: 'Convenção Coletiva 2026', categoria: 'Convenções Coletivas 2026' },
  { titulo: 'Termo Aditivo à Convenção 2026', categoria: 'Convenções Coletivas 2026' },
  { titulo: 'Edital de Assembleia Geral - Março', categoria: 'Editais de Assembleia' },
  { titulo: 'Edital de Eleição da Diretoria', categoria: 'Editais de Assembleia' },
  { titulo: 'Boletim Informativo - Janeiro', categoria: 'Boletins Informativos' },
  { titulo: 'Boletim Informativo - Fevereiro', categoria: 'Boletins Informativos' },
]

const categorias = ['Todos', 'Convenções Coletivas 2026', 'Editais de Assembleia', 'Boletins Informativos']

function App() {
  const [categoria, setCategoria] = useState('Todos')

  const documentosFiltrados =
    categoria === 'Todos' ? documentos : documentos.filter((doc) => doc.categoria === categoria)

  return (
    <>
      <header className="header">
        <h1>SINDADOS-BA</h1>
        <p>Portal do Sindicato</p>
      </header>

      <main className="container">
        <section>
          <h2>Acesso Rápido / Editais</h2>
          <Dropdown label={categoria} options={categorias} onSelect={setCategoria} />
          <ul className="documentos">
            {documentosFiltrados.map((doc) => (
              <li key={doc.titulo}>
                <strong>{doc.titulo}</strong>
                <span>{doc.categoria}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Convênios e Benefícios</h2>
          <Tabs tabs={beneficios} />
        </section>

        <section>
          <h2>Dúvidas Trabalhistas (FAQ)</h2>
          <Accordion items={faq} />
        </section>
      </main>

      <footer className="footer">© 2026 SINDADOS-BA</footer>
    </>
  )
}

export default App
