-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2020 at 01:34 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `video_homes`
--

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `playlistId` int(11) NOT NULL DEFAULT 0,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` time NOT NULL,
  `Album` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `Artist` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `playlistId`, `title`, `duration`, `Album`, `Artist`, `created_at`, `updated_at`) VALUES
(1, 1, 'Bella ciao', '02:35:49', 'Bella Ciao is a English album released on Jan 1993', 'El Profesor', '2020-05-03 21:35:49', '2020-05-03 20:15:12'),
(3, 0, 'titanic', '04:03:00', 'old', 'nice', '2020-05-03 19:01:10', '2020-05-03 19:18:05');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_motion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_proof_video` int(11) DEFAULT NULL,
  `tags` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_custom_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `external_link_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `external_link_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `duration` double(11,2) NOT NULL,
  `size` bigint(20) NOT NULL,
  `video_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `title`, `video_id`, `description`, `video_motion`, `is_proof_video`, `tags`, `video_custom_id`, `external_link_url`, `external_link_name`, `video_type`, `user_id`, `duration`, `size`, `video_path`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Money Heist', '1', 'Spanish T.v Series with 4 Seasons', 'Spanish T.v Series with 4 Seasons', NULL, NULL, NULL, NULL, NULL, 'HD', 1, 22.00, 10, 'moneyheist.com', NULL, NULL, 0),
(2, '3idiots', '2', 'Indian', 'Fast', NULL, NULL, NULL, NULL, NULL, 'hd', 2, 3.00, 500, '3idiots.com/3idiot', '2020-05-04 13:03:02', '2020-05-04 15:11:01', 0),
(5, 'titanic', '3', 'English movie', '30 fps', NULL, NULL, NULL, NULL, NULL, 'hd', 3, 333.00, 9000, 'ti.com', '2020-05-04 15:15:00', '2020-05-04 15:15:08', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
