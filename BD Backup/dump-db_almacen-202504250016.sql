PGDMP                       }         
   db_almacen    17.2    17.2 >    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    19622 
   db_almacen    DATABASE     l   CREATE DATABASE db_almacen WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE db_almacen;
                     postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        postgres    false    6            �            1259    19657    cartas_resoluciones    TABLE     �  CREATE TABLE public.cartas_resoluciones (
    id integer NOT NULL,
    rc_inten character varying(5) NOT NULL,
    rc_tipo character varying(2) NOT NULL,
    rc_numero character varying(4) NOT NULL,
    rc_year integer NOT NULL,
    rc_alfa character varying(1) DEFAULT ''::character varying NOT NULL,
    rc_fecha timestamp without time zone NOT NULL,
    rc_titulo text NOT NULL,
    rc_comentarios text NOT NULL,
    rc_filesize double precision DEFAULT '0'::double precision NOT NULL,
    rc_filename character varying(100) DEFAULT ''::character varying,
    rc_mercado character varying(3),
    rc_subtipo character varying(5) DEFAULT ''::character varying,
    rc_publicar_web boolean DEFAULT true NOT NULL,
    rc_categoria_documentos character varying DEFAULT 'publico'::character varying NOT NULL,
    id_seguimiento integer DEFAULT 0 NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    usuario_creacion character varying(50) DEFAULT 'Admin'::character varying NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now() NOT NULL,
    usuario_modificacion character varying(50) DEFAULT 'Admin'::character varying NOT NULL,
    fecha_modificacion timestamp without time zone DEFAULT now() NOT NULL
);
 '   DROP TABLE public.cartas_resoluciones;
       public         heap r       postgres    false    6            �            1259    19656    cartas_resoluciones_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cartas_resoluciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.cartas_resoluciones_id_seq;
       public               postgres    false    6    225            �           0    0    cartas_resoluciones_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.cartas_resoluciones_id_seq OWNED BY public.cartas_resoluciones.id;
          public               postgres    false    224            �            1259    19624 	   catalogos    TABLE     �   CREATE TABLE public.catalogos (
    id integer NOT NULL,
    cod_tab character varying(3) NOT NULL,
    cod_ele character varying(5) NOT NULL,
    descrip character varying(100) NOT NULL,
    cod_superior character varying(3)
);
    DROP TABLE public.catalogos;
       public         heap r       postgres    false    6            �            1259    19623    catalogos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.catalogos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.catalogos_id_seq;
       public               postgres    false    219    6            �           0    0    catalogos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.catalogos_id_seq OWNED BY public.catalogos.id;
          public               postgres    false    218            �            1259    19705    migrations_typeorm    TABLE     �   CREATE TABLE public.migrations_typeorm (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);
 &   DROP TABLE public.migrations_typeorm;
       public         heap r       postgres    false    6            �            1259    19710    migrations_typeorm_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_typeorm_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.migrations_typeorm_id_seq;
       public               postgres    false    230    6            �           0    0    migrations_typeorm_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.migrations_typeorm_id_seq OWNED BY public.migrations_typeorm.id;
          public               postgres    false    231            �            1259    19631    notificaciones    TABLE     �  CREATE TABLE public.notificaciones (
    id integer NOT NULL,
    rc_id integer NOT NULL,
    t_ciudad character varying(3) NOT NULL,
    t_fecha timestamp without time zone NOT NULL,
    t_hora character varying(5) NOT NULL,
    t_aquien character varying(254) NOT NULL,
    t_atraves character varying(254) NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    usuario_creacion character varying(50) DEFAULT 'Admin'::character varying NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now() NOT NULL,
    usuario_modificacion character varying(50) DEFAULT 'Admin'::character varying NOT NULL,
    fecha_modificacion timestamp without time zone DEFAULT now() NOT NULL
);
 "   DROP TABLE public.notificaciones;
       public         heap r       postgres    false    6            �            1259    19630    notificaciones_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notificaciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.notificaciones_id_seq;
       public               postgres    false    6    221            �           0    0    notificaciones_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.notificaciones_id_seq OWNED BY public.notificaciones.id;
          public               postgres    false    220            �            1259    19693    notificados    TABLE     �  CREATE TABLE public.notificados (
    id integer NOT NULL,
    descripcion character varying(254) NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    usuario_creacion character varying(50) DEFAULT 'Admin'::character varying NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now() NOT NULL,
    usuario_modificacion character varying(50) DEFAULT 'Admin'::character varying NOT NULL,
    fecha_modificacion timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.notificados;
       public         heap r       postgres    false    6            �            1259    19692    notificados_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notificados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.notificados_id_seq;
       public               postgres    false    229    6            �           0    0    notificados_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.notificados_id_seq OWNED BY public.notificados.id;
          public               postgres    false    228            �            1259    19645    seguimiento    TABLE     �  CREATE TABLE public.seguimiento (
    id integer NOT NULL,
    id_documento integer NOT NULL,
    accion character varying(50) DEFAULT 'CREADO'::character varying NOT NULL,
    etapa character varying(50) DEFAULT 'CREADO'::character varying NOT NULL,
    observaciones character varying(50) DEFAULT ''::character varying NOT NULL,
    usuario character varying(50) DEFAULT 'Admin'::character varying NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.seguimiento;
       public         heap r       postgres    false    6            �            1259    19644    seguimiento_id_seq    SEQUENCE     �   CREATE SEQUENCE public.seguimiento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.seguimiento_id_seq;
       public               postgres    false    6    223            �           0    0    seguimiento_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.seguimiento_id_seq OWNED BY public.seguimiento.id;
          public               postgres    false    222            �            1259    19711    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) DEFAULT ''::character varying,
    last_name character varying(255) DEFAULT ''::character varying,
    email character varying(255) NOT NULL,
    password character varying(128) NOT NULL,
    roles text NOT NULL,
    status boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.users;
       public         heap r       postgres    false    6            �            1259    19720    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    232    6            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    233            �            1259    19678    usuarios    TABLE     l  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    role text NOT NULL,
    nombre_completo character varying(500),
    status character varying(10) DEFAULT 'ACTIVO'::character varying NOT NULL,
    estado boolean DEFAULT true NOT NULL,
    usuario_creacion character varying(50) DEFAULT 'SYSTEM'::character varying NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now() NOT NULL,
    usuario_modificacion character varying(50) DEFAULT 'SYSTEM'::character varying NOT NULL,
    fecha_modificacion timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false    6            �            1259    19677    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public               postgres    false    6    227            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public               postgres    false    226            �           2604    19721    cartas_resoluciones id    DEFAULT     �   ALTER TABLE ONLY public.cartas_resoluciones ALTER COLUMN id SET DEFAULT nextval('public.cartas_resoluciones_id_seq'::regclass);
 E   ALTER TABLE public.cartas_resoluciones ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    225    225            �           2604    19722    catalogos id    DEFAULT     l   ALTER TABLE ONLY public.catalogos ALTER COLUMN id SET DEFAULT nextval('public.catalogos_id_seq'::regclass);
 ;   ALTER TABLE public.catalogos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    219    219            �           2604    19723    migrations_typeorm id    DEFAULT     ~   ALTER TABLE ONLY public.migrations_typeorm ALTER COLUMN id SET DEFAULT nextval('public.migrations_typeorm_id_seq'::regclass);
 D   ALTER TABLE public.migrations_typeorm ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    231    230            �           2604    19724    notificaciones id    DEFAULT     v   ALTER TABLE ONLY public.notificaciones ALTER COLUMN id SET DEFAULT nextval('public.notificaciones_id_seq'::regclass);
 @   ALTER TABLE public.notificaciones ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    220    221            �           2604    19725    notificados id    DEFAULT     p   ALTER TABLE ONLY public.notificados ALTER COLUMN id SET DEFAULT nextval('public.notificados_id_seq'::regclass);
 =   ALTER TABLE public.notificados ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    229    228    229            �           2604    19648    seguimiento id    DEFAULT     p   ALTER TABLE ONLY public.seguimiento ALTER COLUMN id SET DEFAULT nextval('public.seguimiento_id_seq'::regclass);
 =   ALTER TABLE public.seguimiento ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    222    223    223            �           2604    19726    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    233    232            �           2604    19681    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    227    226    227            y          0    19657    cartas_resoluciones 
   TABLE DATA           F  COPY public.cartas_resoluciones (id, rc_inten, rc_tipo, rc_numero, rc_year, rc_alfa, rc_fecha, rc_titulo, rc_comentarios, rc_filesize, rc_filename, rc_mercado, rc_subtipo, rc_publicar_web, rc_categoria_documentos, id_seguimiento, estado, usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion) FROM stdin;
    public               postgres    false    225   �S       s          0    19624 	   catalogos 
   TABLE DATA           P   COPY public.catalogos (id, cod_tab, cod_ele, descrip, cod_superior) FROM stdin;
    public               postgres    false    219   �S       ~          0    19705    migrations_typeorm 
   TABLE DATA           C   COPY public.migrations_typeorm (id, "timestamp", name) FROM stdin;
    public               postgres    false    230   ]X       u          0    19631    notificaciones 
   TABLE DATA           �   COPY public.notificaciones (id, rc_id, t_ciudad, t_fecha, t_hora, t_aquien, t_atraves, estado, usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion) FROM stdin;
    public               postgres    false    221   zX       }          0    19693    notificados 
   TABLE DATA           �   COPY public.notificados (id, descripcion, estado, usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion) FROM stdin;
    public               postgres    false    229   �X       w          0    19645    seguimiento 
   TABLE DATA           n   COPY public.seguimiento (id, id_documento, accion, etapa, observaciones, usuario, fecha_creacion) FROM stdin;
    public               postgres    false    223   wZ       �          0    19711    users 
   TABLE DATA           `   COPY public.users (id, name, last_name, email, password, roles, status, created_at) FROM stdin;
    public               postgres    false    232   �Z       {          0    19678    usuarios 
   TABLE DATA           �   COPY public.usuarios (id, username, role, nombre_completo, status, estado, usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion) FROM stdin;
    public               postgres    false    227   �Z       �           0    0    cartas_resoluciones_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.cartas_resoluciones_id_seq', 54942, true);
          public               postgres    false    224            �           0    0    catalogos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.catalogos_id_seq', 1, false);
          public               postgres    false    218            �           0    0    migrations_typeorm_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.migrations_typeorm_id_seq', 1, false);
          public               postgres    false    231            �           0    0    notificaciones_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.notificaciones_id_seq', 24941, true);
          public               postgres    false    220            �           0    0    notificados_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.notificados_id_seq', 15, true);
          public               postgres    false    228            �           0    0    seguimiento_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.seguimiento_id_seq', 1, false);
          public               postgres    false    222            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public               postgres    false    233            �           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 2, true);
          public               postgres    false    226            �           2606    19629 (   catalogos PK_1d78e1f35ded834637978e7cbf2 
   CONSTRAINT     h   ALTER TABLE ONLY public.catalogos
    ADD CONSTRAINT "PK_1d78e1f35ded834637978e7cbf2" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.catalogos DROP CONSTRAINT "PK_1d78e1f35ded834637978e7cbf2";
       public                 postgres    false    219            �           2606    19655 *   seguimiento PK_401601380fe4bfebc3cdc69b0e4 
   CONSTRAINT     j   ALTER TABLE ONLY public.seguimiento
    ADD CONSTRAINT "PK_401601380fe4bfebc3cdc69b0e4" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.seguimiento DROP CONSTRAINT "PK_401601380fe4bfebc3cdc69b0e4";
       public                 postgres    false    223            �           2606    19728 1   migrations_typeorm PK_48f349806db3f6cc916da893c67 
   CONSTRAINT     q   ALTER TABLE ONLY public.migrations_typeorm
    ADD CONSTRAINT "PK_48f349806db3f6cc916da893c67" PRIMARY KEY (id);
 ]   ALTER TABLE ONLY public.migrations_typeorm DROP CONSTRAINT "PK_48f349806db3f6cc916da893c67";
       public                 postgres    false    230            �           2606    19676 2   cartas_resoluciones PK_7fa0528f34122c5278c81de6291 
   CONSTRAINT     r   ALTER TABLE ONLY public.cartas_resoluciones
    ADD CONSTRAINT "PK_7fa0528f34122c5278c81de6291" PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public.cartas_resoluciones DROP CONSTRAINT "PK_7fa0528f34122c5278c81de6291";
       public                 postgres    false    225            �           2606    19730 $   users PK_a3ffb1c0c8416b9fc6f907b7433 
   CONSTRAINT     d   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433";
       public                 postgres    false    232            �           2606    19643 -   notificaciones PK_a9d32a419ff58b53a38b5ef85d4 
   CONSTRAINT     m   ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT "PK_a9d32a419ff58b53a38b5ef85d4" PRIMARY KEY (id);
 Y   ALTER TABLE ONLY public.notificaciones DROP CONSTRAINT "PK_a9d32a419ff58b53a38b5ef85d4";
       public                 postgres    false    221            �           2606    19703 *   notificados PK_cdd32c3722560b66f0248197ac5 
   CONSTRAINT     j   ALTER TABLE ONLY public.notificados
    ADD CONSTRAINT "PK_cdd32c3722560b66f0248197ac5" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.notificados DROP CONSTRAINT "PK_cdd32c3722560b66f0248197ac5";
       public                 postgres    false    229            �           2606    19691 '   usuarios PK_d7281c63c176e152e4c531594a8 
   CONSTRAINT     g   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT "PK_d7281c63c176e152e4c531594a8";
       public                 postgres    false    227            y      x������ � �      s   �  x��V�n�6>�O�خ�ؾ��0�D������m�*9���[�=����#��:3���.Z B��7�监#���i��>V�zd������2q>�jW��n�{�1��c��))��x��Z{)�h@؄��e���o����w�z[�x8�;���es:�m�r�bRLVg�8�vG��nXRr[~E�<�V�>l.��/_�uAv/7̗���9>ҁq�4�n�� .$�m�d������p��8&c�(X^6�/tS4	H�1[ֻ�8%�Jel�����F2' ������.�\�^��:���T���'���W���\6t6��P�����T�hAG�W��#�*>l�/���v�h����X���ێ�8ՙ���~��LdR+�=F�����p:�2���}�x�S�����dd��9�Hy�.M�;�*0��9%O�[��X��$M
_d�F�Y@�[��U�K�L��rEػ��7P�=)����-�-F�΍�йrY�}�&��i�[���;�e�?}��׮��/`�7���7y�Ddzݖ�@� 7���'��0���eń_���q+��G����h��vQ��l
�_e��f<Z��Z����?qcA�7圳T9��=>�3�� +���!�q��h	U3R�:EAߗ>yy8�N����>	�G�`2"���M���(���ƥ�卄�5��a��
.L�,�;X���	�f}{6�3�g����s���~Ҟ‸��_~OJ%��_M��9�v��.�/�x��	(��Zv$��tE�ΪiS��u�g��y+@_�Rh)�	�ѰhM��\\/�q['�W0�f�$\��W&3�$Z�\Е.����A�t�;:��k�׼9
��6c4r��4� �+�
[�d����1"	^�N��Z.���d".z�+���#nKAFΤ@��[���Y�0o[�:&��80
o�h�1yJ��@ԍ��E'��{\�"Ќ�+���2XW�m�ܽN�o\�Ssx��j s�!>�u$��U�|��H��Al�u!`}�q<- ���@"��X���1!�iWw ���C��p��P�kSg-P G!�ͯkHH[��{�0$���7������*�i��h�K�S[�g7����*8���a��56���@���Hg�6\���hҋ�������o+�      ~      x������ � �      u      x������ � �      }   �  x����n�0E��W�Bp����Ԛ	�� �Y��+0� ���n��SU���p^��z��j��O�b~7��^�J|���p�� ���@3y6�B�n�F��m�v�n�ϛ����SH�3	H���K�����>���&ݦ/������Ai��ʏ�	H+���zYWY٥��@�Ā�X(L҉ۗ��P��oۢ�0��(�J���^��j>�g��=�~�v��L�uT.Z�v������̹M]�Z�2�:/�󓀌bѴc�?���)�����8	H@�ݜ��y8����ܒ�l��ֺ0��� ������?�+@L��T�M����6�`5@�P��������&ӗ�(���F��T^t(A���>��j8��C��3��1*�#��1�JM��:�������t6Ǐ�V�'�$пVtNFn�@aΛ��1 ��|�]�,
�|���ڼJo����R� �}%�      w      x������ � �      �   H   x�3�,H-�,�RE�U�`�!=713G/9?&��Y�id`d�kh�k`�``aejjej�gladff����� ���      {   �   x��ν
�0����*zm8=�+�DġE\���F���8XA��{���t�ç��7?����C,��<�1M��>�պ����=��f��*�ɂ�Uʒ�F+4��jH9�8\�a&^���FY"��F6��P��m8�@�N�1�t�G     