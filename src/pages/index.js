import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = ({data}) => {

  const questionList = data.webinyHeadlessCms.listQuestions.data
  console.log('questionList = ', questionList);
  // We render a nice list of blog posts
  const QuestionList = questionList.map(post => (
    <div key={`post-${post.id}`}>
      <h1>{post.question}</h1>
      {/* <p
        style={{whiteSpace: "pre-wrap"}}
        dangerouslySetInnerHTML={{ __html: parseRichTextDataAsHTML(post.body) }}
      /> */}
      <h3>
        {post.answer}
      </h3>
    </div>
  ))

  return (
    <Layout>
      {QuestionList}
    </Layout>
  )
}

export default IndexPage


// A GraphQL query that fetches our blogs' data
export const query = graphql`{
  webinyHeadlessCms {
    listQuestions {
      data {
        qID
        question
        answer
      }
    }
  }
}`