--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_contacts_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_contacts_status AS ENUM (
    'pending',
    'read',
    'replied'
);


ALTER TYPE public.enum_contacts_status OWNER TO postgres;

--
-- Name: enum_documents_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_documents_status AS ENUM (
    'processing',
    'completed',
    'failed'
);


ALTER TYPE public.enum_documents_status OWNER TO postgres;

--
-- Name: enum_jobs_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.enum_jobs_type AS ENUM (
    'full-time',
    'part-time',
    'contract',
    'internship'
);


ALTER TYPE public.enum_jobs_type OWNER TO postgres;

--
-- Name: enum_plans_billingCycle; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_plans_billingCycle" AS ENUM (
    'monthly',
    'yearly'
);


ALTER TYPE public."enum_plans_billingCycle" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogs (
    id uuid NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    excerpt text NOT NULL,
    content text NOT NULL,
    author character varying(255) NOT NULL,
    "authorId" uuid NOT NULL,
    tags json NOT NULL,
    category character varying(255) NOT NULL,
    "featuredImage" character varying(255) NOT NULL,
    "readTime" integer NOT NULL,
    views integer DEFAULT 0,
    likes integer DEFAULT 0,
    "isPublished" boolean DEFAULT false,
    "publishedAt" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.blogs OWNER TO postgres;

--
-- Name: chat_messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat_messages (
    id character varying NOT NULL,
    session_id character varying NOT NULL,
    role character varying(50) NOT NULL,
    content text NOT NULL,
    message_type character varying(50),
    file_path character varying(500),
    file_name character varying(255),
    file_type character varying(100),
    file_size integer,
    voice_duration integer,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.chat_messages OWNER TO postgres;

--
-- Name: chat_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat_sessions (
    id character varying NOT NULL,
    user_id character varying NOT NULL,
    title character varying(255) NOT NULL,
    is_active boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone
);


ALTER TABLE public.chat_sessions OWNER TO postgres;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    subject character varying(255) NOT NULL,
    message text NOT NULL,
    status public.enum_contacts_status DEFAULT 'pending'::public.enum_contacts_status,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- Name: documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documents (
    id character varying NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    "fileName" character varying(255) NOT NULL,
    "originalName" character varying(255) NOT NULL,
    "filePath" character varying(500) NOT NULL,
    "fileSize" integer NOT NULL,
    "mimeType" character varying(100) NOT NULL,
    "userId" character varying NOT NULL,
    status character varying(50),
    "analysisResult" json,
    tags character varying[],
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.documents OWNER TO postgres;

--
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    id uuid NOT NULL,
    title character varying(255) NOT NULL,
    department character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    type public.enum_jobs_type NOT NULL,
    experience character varying(255) NOT NULL,
    description text NOT NULL,
    requirements json NOT NULL,
    responsibilities json NOT NULL,
    benefits json NOT NULL,
    salary json NOT NULL,
    "isActive" boolean DEFAULT true,
    "isRemote" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- Name: plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plans (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    price numeric(10,2) NOT NULL,
    currency character varying(255) DEFAULT 'USD'::character varying,
    "billingCycle" public."enum_plans_billingCycle" DEFAULT 'monthly'::public."enum_plans_billingCycle",
    features json NOT NULL,
    "isPopular" boolean DEFAULT false,
    "isActive" boolean DEFAULT true,
    "maxUsers" integer NOT NULL,
    "maxProjects" integer NOT NULL,
    "maxStorage" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.plans OWNER TO postgres;

--
-- Name: uploaded_files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.uploaded_files (
    id integer NOT NULL,
    user_id character varying NOT NULL,
    filename character varying(255) NOT NULL,
    file_path character varying(500) NOT NULL,
    file_type character varying(50) NOT NULL,
    file_size integer NOT NULL,
    content_summary text,
    image_caption text,
    uploaded_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.uploaded_files OWNER TO postgres;

--
-- Name: uploaded_files_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.uploaded_files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.uploaded_files_id_seq OWNER TO postgres;

--
-- Name: uploaded_files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.uploaded_files_id_seq OWNED BY public.uploaded_files.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id character varying NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone character varying(20),
    password text NOT NULL,
    "lastLoginAt" timestamp with time zone,
    "createdAt" timestamp with time zone DEFAULT now(),
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: uploaded_files id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.uploaded_files ALTER COLUMN id SET DEFAULT nextval('public.uploaded_files_id_seq'::regclass);


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blogs (id, title, slug, excerpt, content, author, "authorId", tags, category, "featuredImage", "readTime", views, likes, "isPublished", "publishedAt", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: chat_messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat_messages (id, session_id, role, content, message_type, file_path, file_name, file_type, file_size, voice_duration, created_at) FROM stdin;
4e2d6866-214e-4973-9ab3-1a93bff1611b	d0d8fa2d-7a6b-4e06-94c2-f8dd4b688458	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-06 12:49:35.839948+00
d35f54ba-6138-4869-9c38-e89f749795e3	d0d8fa2d-7a6b-4e06-94c2-f8dd4b688458	assistant	I'm currently in demo mode. Please configure the Groq API key to enable full functionality.	text	\N	\N	\N	\N	\N	2025-08-06 12:49:35.847496+00
6da9ffbc-3612-4bf6-bbcc-62ff33a88fd4	a100067f-b108-4af4-8d5a-19609bc1789e	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-06 13:08:43.812858+00
7a610b91-35d1-42e9-9b3f-984c40cbc261	a100067f-b108-4af4-8d5a-19609bc1789e	assistant	Hello! I'd be delighted to assist you with your research. What specific area of research are you working on? Do you have a particular topic, question, or problem in mind that you'd like to investigate? Are you looking for help with literature reviews, methodology, or perhaps developing a research proposal?\n\nFeel free to share as much or as little information as you have so far, and I'll do my best to provide guidance and support to get your research underway!	text	\N	\N	\N	\N	\N	2025-08-06 13:08:44.589383+00
06db063a-8a5e-4ee8-9652-ce76ab28320f	e9b7ffd4-596d-4bb0-b085-1d09afbdf26c	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-06 13:59:00.31807+00
d59d8f16-7fff-4254-992d-6794f602307d	e9b7ffd4-596d-4bb0-b085-1d09afbdf26c	assistant	Hello! I'd be delighted to assist you with your research. What specifically do you need help with? Are you working on a research paper, thesis, or dissertation? Do you have a particular topic in mind or need help narrowing down a research question? Perhaps you're struggling with a literature review, or you'd like some guidance on research methodologies?\n\nLet me know, and I'll do my best to provide you with tailored support. I can help with:\n\n* Analyzing research papers and academic documents\n* Providing insights on research methodologies\n* Assisting with literature reviews and citations\n* Answering questions about academic topics\n* Developing research proposals\n* Explaining complex concepts in simple terms\n\nFeel free to share more about your project, and I'll get started on helping you!	text	\N	\N	\N	\N	\N	2025-08-06 13:59:01.299749+00
f0b4a4a1-de71-4ee2-8d7c-a343d4501d50	f80d4589-176b-4634-aaa4-ca6d22a9a082	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-06 18:22:58.454183+00
8cf9ad9a-12e2-4d24-a7ec-ef64150e5f68	f80d4589-176b-4634-aaa4-ca6d22a9a082	assistant	Hello! I'd be delighted to assist you with your research. I'm IntelliThesis, your intelligent research assistant. Please share more about your research project, such as:\n\n1. The topic or area of study you're exploring\n2. The research question or hypothesis you're investigating\n3. Any specific tasks or challenges you're facing (e.g., literature review, methodology, data analysis, etc.)\n4. What kind of help you need from me (e.g., providing insights, suggesting resources, explaining concepts, etc.)\n\nThe more information you provide, the better I can tailor my assistance to your needs. Let's get started!	text	\N	\N	\N	\N	\N	2025-08-06 18:22:59.331421+00
73d89457-8764-4609-9050-3fbb3bca38c7	b16bb6cd-f0bf-42ee-b0f8-a00aa954f647	user	hi	text	\N	\N	\N	\N	\N	2025-08-07 02:36:44.651029+00
8aed42dc-4d20-4932-a2be-f4009d8525c9	b16bb6cd-f0bf-42ee-b0f8-a00aa954f647	assistant	Hello! I'm IntelliThesis, your intelligent research assistant. I'm here to help with your academic research, document analysis, and scholarly writing. How can I assist you today? Do you have a specific research topic or question you'd like to explore, or perhaps a paper you'd like me to analyze? Let me know, and I'll do my best to provide you with well-reasoned, evidence-based responses.	text	\N	\N	\N	\N	\N	2025-08-07 02:36:45.320167+00
01ad8c16-d77b-4bad-ae1e-b725ff679001	b16bb6cd-f0bf-42ee-b0f8-a00aa954f647	user	hlo	text	\N	\N	\N	\N	\N	2025-08-07 02:36:52.520655+00
f49f1307-46d1-4a1c-b6ed-c38ea54a9749	b16bb6cd-f0bf-42ee-b0f8-a00aa954f647	assistant	Hello! I'm IntelliThesis, your intelligent research assistant. I'm here to help with your academic research, document analysis, and scholarly writing. What can I assist you with today? Do you have a specific research topic or question in mind, or would you like me to suggest some areas where I can help?	text	\N	\N	\N	\N	\N	2025-08-07 02:36:53.114353+00
be595793-512c-476b-a725-94d8e0ea2c2e	e07510b9-a904-41b8-ac60-2427a08a8c66	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-07 03:41:55.497629+00
31bd3039-eb58-46ff-9f47-c15418250ab6	e07510b9-a904-41b8-ac60-2427a08a8c66	assistant	Hello! I'd be delighted to help you with your research. I'm IntelliThesis, your intelligent research assistant. What specific areas of research do you need help with?\n\nAre you working on a research paper, thesis, or dissertation? Do you have a specific topic in mind, or are you still exploring different areas of interest? Perhaps you're struggling with a particular aspect of the research process, such as literature reviews, methodology, or citations?\n\nPlease feel free to share more about your project, and I'll do my best to provide guidance, insights, and support to help you move forward.	text	\N	\N	\N	\N	\N	2025-08-07 03:41:56.415248+00
9eeff19c-5346-4deb-b775-7d647e37782a	45b37ad5-fdb0-44d4-9d9e-b6e97bf2b19d	user	Hello	text	\N	\N	\N	\N	\N	2025-08-07 04:19:18.30767+00
5863270a-81e1-4b5c-9492-71d548b772be	45b37ad5-fdb0-44d4-9d9e-b6e97bf2b19d	assistant	Hello! I'm IntelliThesis, your intelligent research assistant. I'm here to help you with your academic research, document analysis, and scholarly writing. How can I assist you today? Do you have a specific research question, a paper you'd like me to analyze, or perhaps you need help with a literature review or citation management? Or maybe you'd like to discuss a particular academic topic? Let me know, and I'll do my best to provide you with well-reasoned, evidence-based responses.	text	\N	\N	\N	\N	\N	2025-08-07 04:19:19.020932+00
2efc84e4-79b8-4eeb-b081-7e3520147a5d	783b5253-7f0b-47f7-ae3a-58487a669e37	user	Test message	text	\N	\N	\N	\N	\N	2025-08-07 04:20:44.083258+00
47168892-5b45-4346-9556-8f79fdf03caa	783b5253-7f0b-47f7-ae3a-58487a669e37	assistant	Hello! I'm IntelliThesis, your intelligent research assistant. I'm here to help with your academic research, document analysis, and scholarly writing. How can I assist you today? Do you have a specific research topic or question you'd like to discuss, or would you like me to help with a literature review or research proposal development?	text	\N	\N	\N	\N	\N	2025-08-07 04:20:44.684187+00
0083f4de-827b-41cc-bee1-d672e3bb9b74	95e9a38c-9d68-450a-ad7b-b33ab56716d5	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-07 05:50:19.293936+00
0c7c9954-c27c-4004-9d2c-3629ef8d6cee	95e9a38c-9d68-450a-ad7b-b33ab56716d5	assistant	Hello! I'd be delighted to assist you with your research. What specific areas of research do you need help with? Are you working on a particular project or paper, or do you have a general topic in mind that you'd like to explore?\n\nPerhaps you'd like me to:\n\n1. Analyze a research paper or academic document for you?\n2. Provide insights on research methodologies or help you design a study?\n3. Assist with a literature review or help you find relevant sources?\n4. Answer questions about a specific academic topic or concept?\n5. Help you develop a research proposal or outline?\n6. Explain complex concepts in simpler terms?\n\nLet me know how I can best support your research endeavors!	text	\N	\N	\N	\N	\N	2025-08-07 05:50:20.270547+00
6dfab2e8-feec-4626-bb6a-811009883989	d742ca5f-a610-4612-8c0b-2931f7acd72b	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-07 06:46:41.483274+00
3fbd0950-3d78-4cd8-83b1-a0ef9c89b2fb	d742ca5f-a610-4612-8c0b-2931f7acd72b	assistant	Hello! I'd be delighted to assist you with your research. What specific area of research are you working on? Do you have a particular topic, question, or hypothesis you'd like to explore? Are you looking for help with literature review, research design, data analysis, or perhaps writing your research paper?\n\nIf you could provide more context or details about your research project, I'll do my best to provide guidance, insights, and support to help you move forward.	text	\N	\N	\N	\N	\N	2025-08-07 06:46:42.266615+00
dd179848-bac6-4909-86dc-e67fcfaff790	de3c6865-28d7-422b-87fd-7d8dc30260af	user	Hello, can you help me with research?	text	\N	\N	\N	\N	\N	2025-08-07 06:47:01.488579+00
060b82f9-759f-41c5-b579-f255141cfab4	de3c6865-28d7-422b-87fd-7d8dc30260af	assistant	Hello! I'd be delighted to assist you with your research. What specific areas of research do you need help with? Are you working on a particular project, or do you need guidance on getting started?\n\nPerhaps you'd like me to:\n\n1. Analyze a research paper or academic document for you?\n2. Provide insights on research methodologies or study designs?\n3. Help with conducting a literature review or organizing citations?\n4. Answer questions about a specific academic topic or concept?\n5. Assist with developing a research proposal or outline?\n6. Explain complex research concepts in simpler terms?\n\nLet me know, and I'll do my best to support you in your research endeavors!	text	\N	\N	\N	\N	\N	2025-08-07 06:47:02.361835+00
4b29559a-8f8b-4a0a-ae54-f23f6068dea2	b2bc6fde-4887-4cba-a2d0-2e381b29d678	user	Hello	text	\N	\N	\N	\N	\N	2025-08-07 06:55:18.481958+00
a35e627f-7647-4c6e-93df-87fe4e156972	b2bc6fde-4887-4cba-a2d0-2e381b29d678	assistant	Hello! I'm IntelliThesis, your intelligent research assistant. I'm here to help you with your academic research, document analysis, and scholarly writing. What's on your mind? Do you have a specific research question or topic you'd like to explore? Or perhaps you need assistance with a literature review, citation, or research proposal? Feel free to ask me anything, and I'll do my best to provide you with well-reasoned, evidence-based responses.	text	\N	\N	\N	\N	\N	2025-08-07 06:55:19.205146+00
\.


--
-- Data for Name: chat_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat_sessions (id, user_id, title, is_active, created_at, updated_at) FROM stdin;
d0d8fa2d-7a6b-4e06-94c2-f8dd4b688458	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-06 12:49:35.823806+00	\N
a100067f-b108-4af4-8d5a-19609bc1789e	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-06 13:08:43.805226+00	\N
e9b7ffd4-596d-4bb0-b085-1d09afbdf26c	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-06 13:59:00.301267+00	\N
f80d4589-176b-4634-aaa4-ca6d22a9a082	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-06 18:22:58.446544+00	\N
b16bb6cd-f0bf-42ee-b0f8-a00aa954f647	eb5dba5c-ab36-4469-a169-bb987d61f67a	hi	t	2025-08-07 02:36:44.644435+00	\N
e07510b9-a904-41b8-ac60-2427a08a8c66	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-07 03:41:55.475082+00	\N
45b37ad5-fdb0-44d4-9d9e-b6e97bf2b19d	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello	t	2025-08-07 04:19:18.288897+00	\N
783b5253-7f0b-47f7-ae3a-58487a669e37	eb5dba5c-ab36-4469-a169-bb987d61f67a	Test message	t	2025-08-07 04:20:44.078741+00	\N
95e9a38c-9d68-450a-ad7b-b33ab56716d5	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-07 05:50:19.27784+00	\N
d742ca5f-a610-4612-8c0b-2931f7acd72b	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-07 06:46:41.473724+00	\N
de3c6865-28d7-422b-87fd-7d8dc30260af	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello, can you help me with research?	t	2025-08-07 06:47:01.484584+00	\N
b2bc6fde-4887-4cba-a2d0-2e381b29d678	eb5dba5c-ab36-4469-a169-bb987d61f67a	Hello	t	2025-08-07 06:55:18.477738+00	\N
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (id, name, email, subject, message, status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.documents (id, title, description, "fileName", "originalName", "filePath", "fileSize", "mimeType", "userId", status, "analysisResult", tags, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobs (id, title, department, location, type, experience, description, requirements, responsibilities, benefits, salary, "isActive", "isRemote", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.plans (id, name, description, price, currency, "billingCycle", features, "isPopular", "isActive", "maxUsers", "maxProjects", "maxStorage", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: uploaded_files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.uploaded_files (id, user_id, filename, file_path, file_type, file_size, content_summary, image_caption, uploaded_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "firstName", "lastName", email, phone, password, "lastLoginAt", "createdAt", "updatedAt") FROM stdin;
a3bf2da0-b7c7-4725-96bb-6655de89efb4	Test	User	test@example.com	+1234567890	$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi	\N	2025-08-06 03:02:54.398165+00	2025-08-06 03:02:54.398165+00
69b6dc91-7743-4411-bfe5-775580e99d65	Test	User3	test3@example.com	1234567890	$2a$12$VUV20NKflhfK4sOAUFtvWuDoeg4BDxLpAcPXsNtABOb7ucu8ZkEk2	\N	2025-08-06 06:32:08.257+00	2025-08-06 06:32:08.257+00
eb5dba5c-ab36-4469-a169-bb987d61f67a	Test	User	test2@example.com	+1234567890	$2a$12$6MiH4z9BrFCHB1H1pjqi5.LJVHRldTs1zyrFxdCfX7eZrHdfTQOt.	2025-08-07 06:36:13.772+00	2025-08-06 03:30:37.966+00	2025-08-07 06:36:13.772+00
719557c4-5e1d-4af6-9f2a-1b036b18a771	ranveer	kapoor	ranveer@gmail.com	+919817642072	$2a$12$7pr2oyLO/fANFFqpdCJhauivjcLfABYs22DGEHFMYslLFamH1BQq2	2025-08-07 06:56:39.545+00	2025-08-07 06:56:38.417+00	2025-08-07 06:56:39.546+00
2f1f0411-83f8-4db9-9425-9856e3ae0114	Vikram	Vikram	mail@gmail.com	+919817642072	$2a$12$7glqatNjnsFdvFSGuR04wuKjZvwlcpVvbjhtG150ql.3oa1YPxRV6	\N	2025-08-06 07:13:35.972+00	2025-08-06 07:13:35.972+00
58bb84ef-33b4-4529-b012-3b1da4abef2b	Vikram	Vikram	kumarv38078@gmail.com	+919817642072	$2a$12$4oJSyUVue.CDx6S0Cdjq.e9iAI0n5W.2oWFhQcUFitLXXoujozm2q	2025-08-07 06:59:17.359+00	2025-08-05 16:08:19.45+00	2025-08-07 06:59:17.359+00
c594c1a8-1c10-456e-85a7-42645da3dcc4	Vikram	Vikram	mail@mail.com	+919817642072	$2a$12$8ixr5oGT6unXx0yqfD/o8OC3BOCmCTI4z5qPi6Ebrs/mKO6ziNOSq	\N	2025-08-06 10:39:53.013+00	2025-08-06 10:39:53.013+00
140a250b-deb9-4e1f-b245-f775663f6d10	Vikram	Vikram	mail@yahoo.com	+919817642072	$2a$12$MP9xn2AbMZDimqaomHalj.f7VXOZjwAjpkp98jn2R764DxPjhk3DK	\N	2025-08-06 10:49:42.747+00	2025-08-06 10:49:42.747+00
\.


--
-- Name: uploaded_files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.uploaded_files_id_seq', 1, false);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: blogs blogs_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_slug_key UNIQUE (slug);


--
-- Name: chat_messages chat_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_pkey PRIMARY KEY (id);


--
-- Name: chat_sessions chat_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_sessions
    ADD CONSTRAINT chat_sessions_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (id);


--
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);


--
-- Name: plans plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_pkey PRIMARY KEY (id);


--
-- Name: uploaded_files uploaded_files_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.uploaded_files
    ADD CONSTRAINT uploaded_files_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: ix_chat_messages_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_chat_messages_id ON public.chat_messages USING btree (id);


--
-- Name: ix_chat_sessions_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_chat_sessions_id ON public.chat_sessions USING btree (id);


--
-- Name: ix_documents_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_documents_id ON public.documents USING btree (id);


--
-- Name: ix_documents_userId; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "ix_documents_userId" ON public.documents USING btree ("userId");


--
-- Name: ix_uploaded_files_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_uploaded_files_id ON public.uploaded_files USING btree (id);


--
-- Name: ix_uploaded_files_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_uploaded_files_user_id ON public.uploaded_files USING btree (user_id);


--
-- Name: ix_users_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_users_email ON public.users USING btree (email);


--
-- Name: ix_users_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_users_id ON public.users USING btree (id);


--
-- Name: chat_messages chat_messages_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT chat_messages_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.chat_sessions(id);


--
-- Name: chat_sessions chat_sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_sessions
    ADD CONSTRAINT chat_sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

