// import axios from 'axios';

// export const getStaticPaths = async () => {
//     try {
//         const {
//             data: { projects },
//         } = await axios.get(
//             'https://next-portfolio-indol-one.vercel.app/api/data'
//         );

//         const paths = projects.map((project) => {
//             return {
//                 params: { id: project.id.toString() },
//             };
//         });

//         return {
//             paths: paths,
//             fallback: false,
//         };
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const getStaticProps = async (context) => {
//     const id = context.params.id;

//     try {
//         const {
//             data: { projects },
//         } = await axios.get(
//             'https://next-portfolio-indol-one.vercel.app/api/data'
//         );
//         const project = projects.filter((item) => item.id === id);

//         return {
//             props: { project: project },
//         };
//     } catch (error) {
//         console.log(error);
//     }
// };

// const ProjectDetails = ({ project }) => {
//     console.log(project);
//     return (
//         <div>
//             <h1>Project Item</h1>
//         </div>
//     );
// };

// export default ProjectDetails;
